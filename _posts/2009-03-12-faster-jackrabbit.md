---
layout: post
title: 'Faster Jackrabbit'
description: ""
date: Thu Mar 12 2009 22:47:11 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/03/12/faster-jackrabbit/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Just with everything, there are right ways to do thing and wrong ways. It looks like Jackrabbit is the same, doing lots of saves generates lots of version history in jackrabbit and results in lots of DB traffic which makes all JCR operations slow. If you can, one save per request cycle, and binding transaction manager to the JCR objects means that all SQL activity is performed at the end of the request cycle in one block. Having seen the impact of a small amount of tuning on write performance, I think there will be scope for more.
