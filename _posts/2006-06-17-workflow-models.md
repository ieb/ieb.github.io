---
layout: post
title: 'Workflow models'
description: ""
date: Sat Jun 17 2006 00:45:52 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/17/workflow-models/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I had a complete and working workflow engine, that had most of the concepts present in XBPLM. Then I realized that it was entity focused and not service focused. To make things work really well in Sakai or any other SOA, they need to minimize the size of the entity model that is pulled into memory and focus much more on delivering a result. The workflow engine was teetering on becoming and EJB monster without the EJB container.

So I threw it all away,

Having built a working prototype the next version is always better understood. With the help of Hibernate, Sychronizer and Spring the new model and service is all up, in less than 8 hours... and its service oriented with a better structured design.... what else can I go an delete ?

One downside to Synchronizer, you have to do a huge amount of refactoring if you want to target Java 1.5.... but seeing all the type safety in 1.5 makes you want to move.
