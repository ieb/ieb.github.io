---
layout: post
title: 'Loading Component Manager.'
description: ""
date: Sat Nov 03 2007 23:21:27 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/11/04/loading-component-manager/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I've been having a look at the loadup of the component manager. At the moment we do it as a side effect of the first webapp to load. This is Ok, but it doesnt really tie into the life cycle of the container and feels wrong. We have seen some problems in the past due to startup order, which the Component Manager should not be subject to.

So https://source.sakaiproject.org/contrib/tfd/trunk/lifecycleloader is a loader that brings the component manager up by hooking into the lifecycle of the tomcat container. This makes it possible to get grater control over the classloader structure and better isolation. It just needs a single line in server.xml to register the listener.

It also opens more possibilities to have a non static component manager registration as we now have full access to JMX and JNDI within the server, so we could lookup the component manager from the container.
