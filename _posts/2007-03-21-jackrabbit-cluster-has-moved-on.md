---
layout: post
title: 'Jackrabbit cluster has moved on'
description: ""
date: Wed Mar 21 2007 00:59:08 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/21/jackrabbit-cluster-has-moved-on/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
It looks like Jackrabbit clustering has move on quite a bit since I last bought a JCR up. Originally there was a demand for clustering in http://issues.apache.org/jira/browse/JCR-169 and later that was implemented under http://issues.apache.org/jira/browse/JCR-623. The basic mechanism is to maintain a journal log that all nodes in the cluster subscribe to and replay to remain consistent within the cluster. The replay causes the the nodes in the cluster to maintain their cache consistent with other nodes in the cluster. The transport mechanism of the cluster was originally file system but could be anything http://mail-archives.apache.org/mod_mbox/jackrabbit-dev/200611.mbox/%3c66c10f230611100158u70ff7b9ak59b889b86b409215@mail.gmail.com%3e

Now in 1.2.3 there is a database backed journal log. Which would make it really easy to implement a JCR cluster.... but perhaps an embedded JCR isnt the way to go as it has a clean RMI interface that will/should be able to connect to any 170 implementation. Offloading all of the content storage to a content storage cluster, separate fro Sakai has some attractions, not least because the API is clean and at a complexity narrow point, leading to network efficiency. Similarly, using the Jackrabbit RMI libraries to connect to a suitably configured JCR server will enable vendors and institutions to plug in a JCR server underneath Sakai without changing Sakai code.... just like Oracle or MySQL.

The other positive, is performance, Jackrabbit appears to be even faster, 380MB in 8,101 files was reporting and ETA of 5 minutes over WebDav to localhost on an OSX box. I wont tell you what the equivalent currently is for Sakai, try for yourself :)
