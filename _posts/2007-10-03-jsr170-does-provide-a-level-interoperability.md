---
layout: post
title: 'JSR-170 does provide a level interoperability.'
description: ""
date: Wed Oct 03 2007 00:57:45 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/10/03/jsr-170-does-provide-a-level-interoperability/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Well that's a bit obvious, standards are supposed to do that, however frequently they fail to generate interoperability.

Sakai now has an experimental Content Hosting Service that uses JSR-170, there are a few bugs in it, but in the general it works and I have uploaded a block of 500MB/1600 files a number of times.

This CHS-JCR implementation in the 2.5 trunk binds to the JCRService api that also in the 2.5 trunk. All it needs is an implementation of the JCRService API. This API is really just a session factory that manages a JSR-170 repository and produces sessions.

We currently have 2 working implementation. A Jackrabbit implementation and a Xythos implementation. The cool bit is that you can deploy your chosen implementation and it works with no code changes. There are obviously some configuration settings, but these are all in sakai.properties. The Xythos implementation also requires a working Xythos server, a xythos properties file and a license key. The Xythos JCR implementation, has only just been released, so perhaps Sakai is the first educational app to bind in this way.

I also have an Alfresco JCRService implementation, however the dependency list is quite large, and it depends on Hibernate 3.2.1, which might conflict with Sakai's hibernate.
