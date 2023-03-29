---
layout: post
title: 'Apache Cayenne Is Cool (Hot, So far)'
description: ""
date: Sat Apr 28 2007 12:52:24 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/28/apache-cayenne-is-cool-hot-so-far/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The first weeks of a marriage are bliss, and I guess thats what the first hours of using yet another ORM tool is like. And so far, 4 hours in I'm having real fun (sad) with Apache Cayenne. I have a largish schema, not related to Sakai that I need to map, about 80 entities, mostly legacy with some reasonably complex relationships. The Cayenne Modeler tool and its integration with Eclipse is excellent, as is their getting started documentation.

After 30 minutes I had the whole schema mapped and building in Eclipse.

After 90 minutes after some problems with Spring XML (not related) the DataContext is up and running and I am able to navigate existing object.

Didn't even have to write a finder or any ORM code at this point.

Unfortunately the database I am working with has no relationships recorded in the DB, but the modeler is letting me do this and once the relationships are marked when I add the mappings into the classes it knows which ones to use, it understands reverse navigation. At the moment it just looks like it works.

I am bound to hit problems at some point, but the first impression is nothing like it was with Hibernate2 and Spring, 4 hours of hard work followed by a trip to the bookshop.

Although there isn't an obvious spring integration, it looks modular and will probably integrate with no problems. It might need a bit of configuration around the DataSource, but it looks like its not nearly as picky about being in Sakai Shared and will share a connection. So far its working so well, I haven't had to look too far inside to work that one out.

No wonder it popped up as a top level project at Apache so fast.
