---
layout: post
title: 'Apple Remote Desktop over SSH'
description: ""
date: Wed Feb 07 2007 16:11:00 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/02/07/apple-remote-desktop-over-ssh/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
If you can get an SSH connection, into a network then you can forward IP over an SSH tunnel.... we all knew that... but Apple Remote Desktop works quite well tunneled. The port to forward in 5900, if you bring it into you local host then you can connect with ARD to localhot and control the remote one.

It would be better if all commands worked on the command line, but when install manuals start talking about GUI admin my heart sinks. the ssh forward command is ssh -L5900:remote-target-ip:5900 ssh.host.com and then connect with ARD onto the local host. This only works for Control and share... bit its quite fast (faster then VNC)
