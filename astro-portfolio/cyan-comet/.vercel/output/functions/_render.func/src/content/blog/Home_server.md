---
title: "Volts Log 3: Home server"
description: "How I set up my home server"
pubDate: "Aug 18, 2024"
heroImage: "/blog/home_server.png"
---

Here's your text with corrected spelling and grammar:

---

## Intro

Hello again! In my last blog post, I showed you my CI/CD pipeline running on GitHub Actions and Jenkins on my home server. However, I didn't discuss my home server in detail. This post is dedicated to my home server: what’s set up on it and how you can replicate the same setup.

## Motivation

The main purpose of the home server is to help me learn CI and CD. That’s it. I wanted a place where I can deploy my programs and monitor them over time to see how they perform. I believe this is a crucial step for every developer in their learning journey. If you think that programmers only write code, you won't go far in your professional career.

## Hardware

The hardware of the system isn't anything special. I'm running an Intel Pentium Gold series with a modest 2 cores and 2 threads. It's not fast. I have it set up with 2 sticks of 4GB RAM that I got very cheap from the secondhand market, and it's running with a secondhand hard drive from a used laptop. This machine is a Frankenstein, and I love it. It proves that old hardware can be reused and recycled ♻️.

This machine was my old daily driver until my video card died on me. It was a fantastic GTS 780 Ti that had Titan firmware. It was the bomb. Literally.

## Operating System

The machine is running the latest version of Ubuntu. PS: Linux nerds, don’t be harsh on me! I'm a noob when it comes to home servers and what operating system to choose for different use cases. So, I went with Ubuntu because it's the most commonly used Linux-based operating system. And I do recommend it if you're new to Linux. The Internet is filled with Ubuntu tutorials and documentation, so you'll do just fine using it.

## Software

### Jenkins

For software, I'm not running much. My main goal for this machine is to learn CI and CD, so Jenkins is a must-have. When setting up the server, I searched for an easier way to deploy and create pipelines because I thought Jenkins was too advanced for beginners. This led me to find Coolify, a very easy-to-use Vercel alternative. Coolify is, in their own words, "**An open-source & self-hostable Heroku / Netlify / Vercel alternative.**" However, I had a lot of trouble setting up even a basic deployment from GitHub, so I decided to use the industry standard for pipelines: Jenkins. I'll link to Coolify because I do think it has potential, but for now, it's just not at the level of Vercel or **Netlify**.

Jenkins is installed locally on the Ubuntu machine and is not running as a container, which I recommend for starters—just install it locally. The container version of Jenkins has some quirks that aren't present when working with a local installation.

### Docker

Docker is a must-have for me. When I design my projects (like Volts), I tend to lean toward containerization, mainly because it's simple, scalable, and works well with the CI/CD paradigm. However, I do have plans to use it to run more than just my programs as containers on this machine.

### Twingate

Twingate is the zero-trust VPN that I’m using. When deploying my programs, I don't forward them to the web; I just use a VPN to connect to them. This approach lets me focus on the CI/CD part rather than the security part. Server security is a huge subject and is something for another time.

### SonarQube

SonarQube is a container-based application for code quality and testing. I'm running SonarQube for my Spring applications and plan to make it work for my front-end projects as well.

Well, that's it for now! That's my home server and what I'm running on it. I'll keep working on it because I enjoy configuring it just the way I like.

## Links

Coolify: [Coolify](https://coolify.io/)

VPN: [Twingate: It's time to ditch your VPN](https://www.twingate.com/)

Jenkins: [Jenkins](https://www.jenkins.io/)

[Code Quality, Security & Static Analysis Tool with SonarQube | Sonar (sonarsource.com)](https://www.sonarsource.com/products/sonarqube/)
