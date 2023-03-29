---
layout: post
title: 'Sesame RDBMS Implementation'
description: ""
date: Mon Jun 05 2006 16:25:04 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/05/sesame-rdbms-implementation/
categories: "Search, Thought"
hero: ../../../defaultHero.jpg
---
It looks like there are some interesting features in the Sesame default RDBMS implementation. Since it uses its own connection pooling, it tends to commit on close. If the standard connection pool that is used by default is replaced by a java.sql.Datasource, things like commit don't happen when Sesame thinks they should have happened. The net result is a bunch of exceptions associated with lock timeouts, as one connection coming out of the data source block subsequent connection. The solution looks like its going to be to re-implement most of the RDBMS layer with one that is aware of a Datasource rather than a connection pool.
