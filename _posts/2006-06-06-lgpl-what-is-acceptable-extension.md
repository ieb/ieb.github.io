---
layout: post
title: 'LGPL What is acceptable extension'
description: ""
date: Tue Jun 06 2006 23:54:13 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/06/lgpl-what-is-acceptable-extension/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Sesame is LGPL license, with a clarification on Java binding. The net result of the statement in the Readme is that you can use Sesame in another project without it having to be LGPL. Thats great! Well its great if you want to use the LGPL Library in a way the developers intended. When it comes to reimplementing an underlying diver you are faced with three choices. Either implement the driver so that its compatible with the internal implementation, or implement your own algorithm, or use something else.

Implementing your own driver, keeping it compatible with the original driver and underlying storage structure is almost certainly an LGPL extension that should also be licensed as LGPL and released back to the net.

Implementing your own driver with its own algorithm will probably give you the right to claim that the code is just using the LGPL code as a library. Then you can choose you own license.

If your project already has a non xGPL license, then neither of the above options are palatable. A fork in the 'virtual' code base or changing your license. I dont know the answer, so I'm choosing the do nothing option. I wont be using the Data source and non DDL based Sesame RDBMS driver or fixing any of the bugs in it, since its just too close to the original, uses too many of the thoughts and would have to be licensed LGPL. So Sesame will be available inside Sakai search as a add in module that uses its own database connection. I guess that not many will want to use this non-standard, in the terms of Sakai, connection strategy.

There is hope, if an RDF Triple store becomes as widespread and acceptable as a RDBMS, then we will be able to treat it just like MySQL or any other database. Time will tell.
