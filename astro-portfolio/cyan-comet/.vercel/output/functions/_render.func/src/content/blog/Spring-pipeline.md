---
title: "Spring pipeline"
description: "Creating Java Spirng pipeline using GitHub Actions and Jenkins"
pubDate: "Aug 12, 2024"
heroImage: "/blog/spring-pipeline/banner.png"
---

Hello to whoever is reading this. This is my second entry into the devlog of creating a web application. In this post, I’ll explain the automation I use for the Spring application and describe my system for deployment, testing, and code quality.

Here is a quick overview of how my pipeline works.

![Pipelien diagram](/blog/spring-pipeline/pipeline.svg)

# Code repository

The code repository used throughout the project is GitHub, which is a reliable cloud-based repository service. Also, GitHub provides an Actions feature that can be used for CI/CD use cases, which is one of the reasons why I chose GitHub for this project. The quick and reliable use of GitHub Actions is essential for my needs.

For my use case, I wanted a way to build the JAR file after merging or pushing to the main branch. I know that build files, or in other words, the 'Artifact,' should ideally be stored in a separate repository called an Artifact repository, which manages only the artifacts for a given project. This approach provides traceability and the option to revert to an older version of the artifact if a problem arises. However, since this is my first time creating a CI/CD pipeline, I wanted to keep things simple and add features as the project progresses. In a sense, I'm keeping scalability in mind but not focusing on it until the complete skeleton is up and running.

My GitHub Actions are simple and are used just to detect a merge or push to the main branch and build a JAR artifact to be deployed.

```
name: Gradle Build

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up JDK 17
        uses: actions/setup-java@v2
        with:
          java-version: 17
          distribution: 'adopt'

      - name: Grant execute permission for gradlew
        working-directory: volts-server
        run: chmod +x gradlew

      - name: Build with Gradle
        working-directory: volts-server
        run: ./gradlew build

      - name: List build directory
        working-directory: volts-server
        run: ls -la build/libs

      - name: Upload JAR file
        uses: actions/upload-artifact@v3
        with:
          working-directory: volts-server
          name: my-app-build
          path: build/libs/*.jar

      - name: Commit JAR file to repository
        working-directory: volts-server
        run: |
          git config user.name "UserName"
          git config user.email "user@mail.com"
          git add build/libs/*.jar
          git commit -m "Add build artifacts"
          git push origin main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

# Jenkins

I use Jenkins on the server where the application will be deployed. I understand that deployment services should ideally be on a separate machine or virtual machine, but for simplicity's sake, everything is on the same machine. The Jenkins pipeline is responsible for getting the build artifact (the JAR file), creating a Docker instance, and starting it up. However, before deployment, the code is run through SonarQube. SonarQube is a service for code quality, test coverage, code issues, and overall code assessment. SonarQube is set up as a Docker container running on the same machine. As of now, the Spring application is deployed regardless of whether the SonarQube Quality Gate fails. I chose to deploy to Docker because containers are easier and quicker to manage. The faster you use what you know, the quicker your app will be ready for use.

```
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "100volts-server:latest"
        GITHUB_REPO = "https://github.com/100volts/100volts-server.git"
        DOCKERFILE_PATH = "volts-server/Dockerfile"
        BRANCH_NAME = "main"
        SONARQUBE_SERVER = "sonar-volts"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH_NAME}", url: "${GITHUB_REPO}"
            }
        }

        stage('Scan') {
            steps {
                dir('volts-server') {
                    sh 'chmod +x ./gradlew'

                    withSonarQubeEnv(installationName: "${SONARQUBE_SERVER}") {
                        sh './gradlew clean build sonarqube'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}", "-f ${DOCKERFILE_PATH} volts-server/")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop 100volts-server || true"
                    sh "docker rm 100volts-server || true"

                    sh "docker run -d --name 100volts-server -p 8081:8081 ${DOCKER_IMAGE} --restart=always"
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
```

# Finishing notes

Creating and managing a pipeline like this has greatly improved my scripting skills. It was exciting to build something that will save a lot of time in the long run. All in all, the exercise in continuous integration is one that I recommend to any application builder out there. Thank you for reading my second devlog about creating a Spring pipeline.
