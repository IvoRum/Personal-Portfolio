---
title: "Chat Unity"
description: "A stand alone android chat app build with web sockets "
pubDate: "Jul 25 2024"
heroImage: "/projects/banner/chatunity.png"
---

## Repository

[Chat-unity Repo](https://github.com/IvoRum/ChatUnity)

## Packeges

### Auth

#### Log in

```
log: ivo@mail.com ivo12345678
```

```
log: deme@mail.com deme12345678
```

### Register

```
reg: newUser@mail.com newuserpass12345678 08879465 ivan ivanov
```

### Messages

#### Bulck order of messages

For each of the orders paird whit a conversation id of the conversation

```
gms: userId conversation$order ...
```

```
gms: 1 1@3
```

returns: All foudn messages. It will return emplty list if nothing was found.

#### Send message

```
sms: userId converstion order $content
```

```
sms: 1 1 10 $Alabala alo be
```

returns: only if problem whit the message.

### Friends

```
gfr: userId
```

### Group

```
gug: userId
```

returns: set of all foud friends.