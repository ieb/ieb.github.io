---
layout: post
title: 'Jackrabbit, Oak, Sling, maybe even OAE'
description: ""
date: Thu Aug 30 2012 04:52:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/08/30/jackrabbit-oak-sling-maybe-even-oae/
categories: "Apache Jackrabbit, Apache Sling, Berlin, Jackrabbit, NoSQL, Sling, Tree (data structure), Uncategorized"
hero: ../../../defaultHero.jpg
---
[![](http://jackrabbit.apache.org/oak/oak.png)](http://jackrabbit.apache.org/oak/)Back in January 2010 the Jackrabbit team starting asking its community what did it want to see in the next version of [](http://jackrabbit.apache.org/oak/)[Jackrabbit](http://jackrabbit.apache.org/oak/). There were some themes in the responses. High(er) levels of write concurrency, millions of child nodes and cloud scale clustering with NoSQL backends. I voted for all of these.

I was reminded of this activity by the announcement of a Oak Hackathon, or rather an [Oakathon](http://wiki.apache.org/jackrabbit/Oak%20Hackathon%20September%202012) that is being organised this September at the .[adaptTo](http://adaptto.mixxt.de/) conference in Berlin. This Oakathon seems to be intended to get users upto speed on using Oak, which means that it might be ready for users to take a look. So I did. The code checks out, builds and passes all its integration tests. No surprises there from the Jackrabbit team.

I am not going to pretend I understand the storage model being used or how it addresses the requirements that came out of Jackrabbit, but the Persistence implementation looks like it could be adapted to a sharded schema over many DB instances or even ontop of Cassandra. The storage model looks something like a git tree. It seems to solve the many child nodes issue that Sparse Map Content solved for OAE in a slightly different, but more efficient way by using a DAG structure with pointers to a child tree rather than a parent pointer. I won't be able to tell if the concurrency issues that caused me to have to squeeze Sparse Map Content into the Sling repository API layers, without some testing, but the approach looks like it might. Certainly the aims of the Road map cover the needs of OAE and go beyond the scale and concurrency required.

Best of all, it already has a Sling Repository implemented, so it should be relatively easy to spin up Sling on Oak and run all the tests that caused OAE to move from Sling on Jackrabbit to Sling on a hybrid of SMC and Jackrabbit.
