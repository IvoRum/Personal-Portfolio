---
title: "Docker notes"
description: "Docker sertification notes"
pubDate: "Set 12 2025"
heroImage: "/blog/blog-placeholder-3.jpg"
---

# Intro

Docker uses images and containers to allow apps to run, consistently.

# Name Spaces

| Namespace | Used For                                                                              |
| --------- | ------------------------------------------------------------------------------------- |
| PID       | Isolates the process tree, giving a container its own process IDs.                    |
| NET       | Provides a container with its own private network stack.                              |
| MNT       | Isolates filesystem mount points, so a container has its own view of the filesystem.  |
| IPC       | Isolates inter-process communication resources like shared memory.                    |
| UTS       | Allows a container to have its own hostname and domain name.                          |
| USER      | Maps user and group IDs inside a container to different IDs on the host for security. |

# Install

Debian

```shel
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

# Basics

`ps` - List active containers
