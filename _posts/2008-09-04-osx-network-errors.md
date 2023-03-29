---
layout: post
title: 'OSX network errors'
description: ""
date: Thu Sep 04 2008 12:18:34 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/04/osx-network-errors/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
OSX has a bug in its network stack, apparently associated with a 10.5 update, but it appears to fix slow performance on large file transfers on Tiger as well. Details are <http://gp.darkproductions.com/2008/03/fix-for-slow-wifi-80211-file-transfers.html> here.

The main issue is the ack response, where both machines back of and wait for the other to ack, being far to polite. It appears to have fixed things for me backing up on a very very slow time capsule, which is not fast again.

The commands to reduce the ack are

```
sysctl -w net.inet.tcp.delayed_ack=0
```

and to set it back to defailt

```
sysctl -w net.inet.tcp.delayed_ack=3
```

and to list it

```
sysctl net.inet.tcp.delayed_ack
```

The annoying part is, if the a network mounted disk is mounted over a dodgy tcp connection, it will loose the mount and stall other disk activities. This can turn up as slow response, rather than total loss of the mount.
