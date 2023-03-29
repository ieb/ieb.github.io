---
layout: post
title: 'JPA EntityManagers'
description: ""
date: Tue Jan 27 2009 00:21:38 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/01/27/jpa-entitymanagers/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Been having problems with JPA EntityManagers recently in K2 as we didn't realise they should not be shared between threads. Fortunately fixing this in K2 doesn't require very much. Create a proxy to a thread bound entity manager contained within a ThreadBound holder. When these are put into a request scope cache from the CacheManager, the ThreadBound.unbind method is called when the request ends, so we have a hook to perform commit and close down on the EntityManager. The really nice thing about using a Cache from the CacheManager is that it can also be created with a Thread scope rather than a Request scope. In Thread scope, its not unbound... so by changing one switch we can, if the JPA usage is well behaved move from a per request to per thread binding. Fortunately the overhead of creating an EntityManger from most JPA providers is &lt; 1ms.. and with this approach, we don't need to create it on every request.
