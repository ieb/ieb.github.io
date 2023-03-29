---
layout: post
title: 'Shindig SPI Implementation'
description: ""
date: Mon Sep 01 2008 00:22:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/01/shindig-spi-implementation/
categories: "cayenne, shindig, Thought"
hero: ../../../defaultHero.jpg
---
A while back I started a Service Provider Implementation for Shindig aiming to store the data necessary to support a the OpenSocial API in a simple DB. This was before there was a SPI, now there is and it makes quite a bit of sense. There is a push to release Shindig 1.0, but the end of the month, and although a sample implementation of the SPI may not be in the core 1.0 release, I think it would make sense to have something done by then. Not least because it will keep us clean on maintaining the SPI, if we have an implementation of the SPI to break.

The Open Social Spec has grown in recent months, as more eyes have been over it. 0.7 was a relatively simple social model, but in 0.8.1 that has just been released, you can see the influence of input from the likes of MySpace and LinkedIn. All of this makes sense, and certainly makes the model more complete, but at the same time makes it all the more complicated.

So how to implement the SPI. I looked at pure JDBC, but decided, due to the size of the model, this was going to take quite a time to make work well. I have used Hibernate in the past, but often found that it leads to a great object model, but really bad DB model that dies in production. There are more modern standards like JPA, but some of these have the same potential as older versions of hibernate to make a mess of the DB. A while back I used Apache Cayenne on another reasonably large scale project. What struck me at the time was how if made the developer focus on the construction of a great DB model that would perform at scale, and then drove the connection of that DB model into a Object model.

For Shindig, I am using Apache Cayenne 2. I did a v0.7 implementation with this stack and I am now updating this to 0.8.1. The big thing that strikes me is that I am designing the database from an entity model, and then performing Relational to Object Mapping, rather than building a Object model and finding a way to store it. The second thing, that strikes me, is that even though there are significant additions and changes between 0.7 ad 0.8.1 Cayenne is quick and easy to work with, leaving me free to make the optimizations I want to in the ORM conversions without demanding me to jump through hoops.

What will be really interesting to see, is how the implementation process impacts the database design and scale up in production. At the moment, it looks nice, but as always with a DB, looking nice needs to be checked with lots of data and load at scale.
