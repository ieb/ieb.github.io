---
layout: post
title: 'Boddington/Tetra/Hierachy'
description: ""
date: Wed Aug 30 2006 10:44:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/30/boddingtontetrahierachy/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The penny dropped, I went to Inverness to meet the Tetra/Boddington crowd from UHI and the similarities and differences between Tetra/Boddington and Sakai became clear. They are both collaborative environments for education and research, but Boddington has a hierarchical organization where Sakai has a flat organizational structure. If you add a Hierarchy super structure to organize Sakai Sites and Entities and a mechanism of viewing that structure then Sakai starts to look a lot like Boddington.

Boddingtons architecture is interesting. Being from the mid 1990's, the inter webapp context capabilities of Tomcat and other containers was not fully understood, so Boddington deploys in a single War and single classloader. This appears to have 2 results, development is centralized and the separation of concerns within the architecture is blurred. It started life before JSP's and XML were around, so it has an interesting templating language which is concise with a a short request stack, but not that sophisticated. There is nothing wrong with this, but it does add constraints to the development process.

If we add an organizational hierarchy to Sakai so that Tetra can use parts of the Sakai framework to organize its tools and sites then most of the knowledge and IP developed since the mid 1990's can be ported to a more modern services oriented architecture, eventually are real SOA's appear (eg Apache Tuscany), then Tetra can start to fulfill some of the JISC ELF dreams of a loosely coupled SOA Web services architecture.
