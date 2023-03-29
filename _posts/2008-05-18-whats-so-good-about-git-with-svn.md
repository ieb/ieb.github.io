---
layout: post
title: 'Whats so good about git with svn'
description: ""
date: Sun May 18 2008 17:00:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/05/18/whats-so-good-about-git-with-svn/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
This should be whats so good about git, but Sakai has SVN as its central repo.... so whats so good about git-svn ?

- I am not forced to commit when I restructure, so when I go out of network range I am not forced to stop 2 minutes after the network is gone.
- I can run multiple branches in the same code base, a quick git commit -a, git checkout otherbranch changes the active files on disk
- I dont have to persuade anyone to change the central repo, if there is one
- I can batch up all my svn commits into a single big block, and make a decision to commit when I am done

Ok the sync takes a while for a very large repo, like the whole of sakai, but once synced everything becomes much easier. And you will notice the I,I,I above, thats because its distributed so it doesn't effect you :) (unless you want to use it). All of this goes for others like Hg.

I am only wondering why I didnt use it earlier.... lots of people said it was a good idea. Lesson there, listen more, think less.
