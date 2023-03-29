---
layout: post
title: 'The benefits of Unit testing.'
description: ""
date: Sat Sep 29 2007 11:39:58 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/29/the-benefits-of-unit-testing/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Ok, so its only one data point, but it illustrates the benefits of unit testing.

3 weeks without starting Sakai fixing a blocker bug in search. That three weeks has not been spent just writing code, but has mainly been spent writing unit tests. Initially simple test, then more complex multi threaded tests simulating life in a cluster.

After sorting out the Spring configuration file and getting that working (there has to be a better way of doing IoC). The search component starts up and runs in soak mode (constantly indexing) for 12 hours on 500MB of data. First Time! No Errors!

When in unit test mode, the developer cycle time was 10 seconds or less. Starting up Sakai still take at least 60.... you get bored... go read emails... write blogs :)

Unit testing... now you know it makes sense!
