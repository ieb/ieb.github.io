---
layout: post
title: 'Kernel Update'
description: ""
date: Mon Jan 26 2009 11:11:55 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/01/26/kernel-update/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
That ssounds like a security patch, but its not :). The Sakai Kernel work is moving forwards. We have a demo server up and running with the UX work on top of it and should soon have Content Authoring functional. We have tested some of the aspects. Loaded 5000 users, a bit slow at the moment, but then we dont have any indexes in the DB. 0.4s per user. We have tested webdav, which looks just fine with 2G of files form 1K to 100K in side, and done some tests with large files > 1G. So far so good. The best bit appears to be it is quite happy in 64M of memory and starts in 12s.

This week I hope to get the site services sorted out (perhase today). We have had Carl Hall from GATech and Jon Gorono form UCD over in Cambridge which has helped immensely to make more progress, share thoughts and learn from each other.

There is more to come as this ramps up.
