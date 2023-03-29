---
layout: post
title: 'Our code is like custard'
description: ""
date: Fri Oct 29 2010 21:04:10 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/10/29/our-code-is-like-custard/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
When you hit it, it becomes like concrete. Deadlocked like concrete. Oh dear, having just cut an RC3 for our Q1 release we elected to spin up a server and friendly users have a play, confident that we had found all the contention issues. So confident that the JMeter test scripts had found everything we used those test scripts to populate the QA server with a modest number of users, groups and content. I knew something wasn't quite right as I loaded up the content and got complaints of slow response over IRC; come on, content upload being performed by 12 users with only 6K users loaded should not cause others to see really slow response (define really slow ? minutes, no kidding). In a moment of desperation I take solace in the fact that even though some queries were taking minutes, the server was rock solid. (lol).

So with that background and my head firmly stuck in the sand, we went into the 1h bug bash to gently press the code base. At this moment I want you to visualise a large pool filled full of custard, about 30 people on the edge who jump in at the same time. Without much movement and a bit of shock the whole pool turns solid lump. Our code base is a non newtonian fluid, just like the custard in the swimming pool, and this blog post is stress relief before trying to find out where that deadlock is coming from, not what I want to be doing when I was supposed to be spending the weekend with family. If I find the cause and its not too embarrassing I might post it here.
