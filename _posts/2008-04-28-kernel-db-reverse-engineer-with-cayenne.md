---
layout: post
title: 'Kernel DB Reverse Engineer with Cayenne'
description: ""
date: Mon Apr 28 2008 11:57:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/04/28/kernel-db-reverse-engineer-with-cayenne/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Since I have been playing with Cayenne, I though I would have a look at what it would do with the Sakai Kernel database. This is the limited set of services that represent a minimal kernel, no UI.

After fixing a bug, and getting the database built by starting tomcat, (2h), I popped up Cayenne modeler and reverse engineered the DB. (10s :) ), Garbage in Garbage out I thought. Well not exactly, the modeler identified a number of tables with no proper PK's and generated all the classes, and generated a significant number of the relationships between the tables. Its going to be interesting to see if these classes can replace the data storage area. Especially if its going to give us enough control in the AuthZGroups service to get any performance.

Oh, and I now have core SQL DDL scripts for DB2, Derby, Ingres, Postgres, Sybase, SQLServer and naturally HSQLDB, Mysql and Oracle.... all thanks to the cayenne plugin.

On other reason for thinking that this is worth doing is that Cayenne considers the request cycle to be the transaction boundary, and has built in caching. A test query I didn in the OpenSocial mode took 49ms first time round and 3ms second time round, indicating that the caching is working (mysql Query cache disabled to highlight DB load)
