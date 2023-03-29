---
layout: post
title: 'Reducing Working Code Size'
description: ""
date: Tue Jan 08 2008 12:50:40 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/01/08/reducing-working-code-size/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
How many of us load the whole of the Sakai Code base into eclipse, and wonder why it consumes so much memory? Most I guess. Alternatively you can just load the code you are working on and just use the local maven repo for the Sakai jars, that way eclipse will run in considerably less memory. When you need to access the source code, if the repo has the source jars, then they can be used instead of the live code base. Obviously this doesn't allow you to edit all any code anywhere.... but then should we all be doing that anyway... except for those rare debugging exercises.

I did the above for search, editing the .classpath file for eclipse and now I can just work on search with all the other projects close. Eclipse memory usage has dropped from 1G to closer to 128M. Once we package the core (bin and src) into a maven repo, its going to make sense to use this approach. Fortunately maven has support to help us.
