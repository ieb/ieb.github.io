---
layout: post
title: 'Jackrabbit Cluster'
description: ""
date: Fri Nov 10 2006 00:47:17 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/11/10/jackrabbit-cluster-2/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Jackrabbit has created a clustered version... or at least there is a version in trunk that will be part of core that clusters. Jackrabbit can be made to use a shared DB quite easily, but if you do that and have 2 or more nodes accessing, the local cache maintains a stale copy of the data. The cache is what makes Jackrabbit fast. You could throw away the cache or make it write through expire, but that would kill much of the performance.

So the clustered Jackrabbit uses a file based Journal to record the changes, nodes reading that file can then invalidate their local cache based on the shared file. This has two drawbacks, firstly its slow as polling has to be used, and secondly its not scalable as only one can write at a time.

I dont know if its possible, but I would hope we could replace this filesystem journal with ActiveMQ and a JMS topic. All JCR nodes could subscribe to the Topic and invalidate the local cache based on JMS messages.
