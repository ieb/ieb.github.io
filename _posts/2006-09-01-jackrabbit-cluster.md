---
layout: post
title: 'Jackrabbit Cluster'
description: ""
date: Fri Sep 01 2006 00:12:22 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/01/jackrabbit-cluster/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
There is one think that I must have forgotten to check out completely with Jackrabbit..... clustering ! Although it uses a DB, and has a Persistence Manager, there is a Cache sitting above the Persistence Manager, which, in a cluster risks becoming invalidated. There is work in this area under https://issues.apache.org/jira/browse/JCR-169 but no indication of when its going to be implemented. I have also seen a jackrabbit-dev discussion on the implementation of cache concurrency in a cluster, which appears to be sensible and almost working.

So, although this looks promising, the only way to run Jackrabbit in a cluster with the cache turned on is to have a single JCR node. This is not ideal as I already know that the CHS API hits the underlying storage very hard. Turning the cache off, is probably as bad as running it on a single node.

There are a whole load of issues to be solve in this area if Jackrabbit is to work in a cluster as we would like it to.
