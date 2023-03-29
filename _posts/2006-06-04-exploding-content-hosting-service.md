---
layout: post
title: 'Exploding Content Hosting Service'
description: ""
date: Sun Jun 04 2006 09:35:39 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/04/exploding-content-hosting-service/
categories: "Core, Thought"
hero: ../../../defaultHero.jpg
---
We had some extremely productive conversations on the ContentHostingService towards the end of the Vancouver Conference. The basic idea of the ContentHostingPulugin was extended, and it looks like it might be worth attempting to restructure the ContentHostingService to separate the implementation of the default storage mechanism so that node properties are stored centrally, but all handling mechanisms become plug ins. This will me merging both ContentResource and ContentCollection into a single ContentEntity more fully so that the core of ContentHosting can treat them the same, regardless of where and how they are stored. This opens the potential to have tools inject ContentHostingHandlers into the ContentHostingService. ie Repositories, DSpace, IMS-CP etc etc etc, not going to be 2.2, but maybe 2.3. Will be working with Jim Eng on this, as its his code.
