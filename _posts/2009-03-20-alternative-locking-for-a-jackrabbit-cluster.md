---
layout: post
title: 'Alternative Locking  for a Jackrabbit Cluster'
description: ""
date: Fri Mar 20 2009 18:31:43 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/03/20/alternative-locking-for-a-jackrabbit-cluster/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
From the previous 2 posts you will see that I have been working on fixing some concurrent update issues with jackrabbit in a cluster. The optimising and merge nature of Jackrabbits conflict resolution strategy certainly gives it performance, but it does not guarantee that the data will always be persisted. Handling those exceptions would work in a perfect world, but I don't have one of those to hand.

The solution, for the moment at least, appears to be to lock the nodes prior to modification locating the closest persisted ancestor to hold the lock. Unfortunately the jackrabbit lock manager uses the Journal records when performing locks so the I have written a in memory lock manager that replicates the map of locks over the cluster not using the the database. This, if it proves reliable, should eliminate the need to access a shared database on every lock and unlock operation. The unit tests are showing that under no contention locks take 0.02ms and clearing a set of about 10 locks is 0.004ms. Obviously with massive contention the lock time approaches a factor of the throughput. Sadly, the logging system is susceptible to deadlocking since we cannot guarantee the order of locking, however since update follow the same code paths the locking and unlocking order is liable to be the same. Its the same problem as exists inside the DB, except that the scope of locks we are dealing with are probably smaller.
