---
layout: post
title: 'Configuring Jackrabbit'
description: ""
date: Thu Aug 31 2006 23:07:10 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/31/configuring-jackrabbit/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
There are some interesting things that happen when you try and configure Jackrabbit. Firstly, the configuration appears to be stored in the repository home, so, once created, changing the startup configuration probably wont change the repository.... except that some settings appear to get through. For instance, the driver class and the database url appear to get through, but the username and password dont. Im not certain what exactly is happening.

The other strangeness, is that the standard SinpleDbPersistanceManager uses a DirectManager.getConnection(url,usename,password) to get the connection to the database. I haven't found out (yet) if there is one persistence manager per JVM, or its one per session.

If its one per JVM, its probably Ok, one per session, is not so good, as this will require pooling or opening and closing of sessions. For the moment, I've implemented a version (almost exact copy) of the jackrabbit SimpleDbPersistanceManager that looks the datasource up from Spring, and uses that.

The weird bit about JackRabbit in a spring environment, is that is uses its own IoC quite separate from Spring. Im not entirely certain how this is all going to work in a cluster, but it looks like it might require some shared disk to work. I hope not, the documentation appears to say its Cluster friendly, but I can see some Lucene segments on local disk which doesn't look cluster like.
