---
layout: post
title: 'Fedora OSGi'
description: ""
date: Sun Oct 18 2009 10:31:35 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/10/18/fedora-osgi/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Had a visit from Edwin Shin (Fedora Commons Committer) this week who nipped over from France where he now lives. Compared to the med, Cambridge is cold this year. We spent the week looking at the progress made on Sakai K2, based on Apache Sling from a view point of Digital Repositories. Looks like there is lots of common ground. We both see long term storage as being cloud based, with interesting points on storage mechanisms like Apache Cassandra, Project Voldemort etc. Also the component structure provided by OSGi (Apache Felix in the case of Sling) has some strong benefits. He started to embed a Fedora RDF component into Sling/K2 as an OSGi component. I wonder how much of a Fedora/DSpace functionality could be covered by standard components like this. Might achieve the same economies we saw with Sakai 1.8Million lines of code down to about 60K, just because we avoided "not-invented-here"
