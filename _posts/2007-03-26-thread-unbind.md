---
layout: post
title: 'Thread Unbind'
description: ""
date: Mon Mar 26 2007 10:27:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/26/thread-unbind/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
ThreadLocalManager does not give the application using it any indication of when the request cycle is over. If it had some unbind mechanism then objects could be notified. eg If the object being ejected from the thread local implement ThreadUnbind, its unbind method is called.

I might have thought this before, it would make it much easier to release resources.
