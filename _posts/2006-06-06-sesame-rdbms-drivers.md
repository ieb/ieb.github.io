---
layout: post
title: 'Sesame RDBMS Drivers'
description: ""
date: Tue Jun 06 2006 16:25:30 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/06/sesame-rdbms-drivers/
categories: "Search, Thought"
hero: ../../../defaultHero.jpg
---
I've written a Data source based Sesame driver, but one thing that occurs to me in the Sakai environment. Most production deployments do not allow the application servers to perform DDL operations on the database. Looking at the default implementations, thats the non data source ones, they all perform lots of DDL on the database in startup and in operation. This could be problem for embedding Sesame inside Sakai. I think I am going to have to re-implement from scratch the schema generation model. It might even be worth using Hibernate to build the schema although it not going to make sense to use Hibernate to derive the object model, the queries are just too complex and optimized.
