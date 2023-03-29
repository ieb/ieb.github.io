---
layout: post
title: 'Cayenne Plugin'
description: ""
date: Thu Apr 24 2008 11:48:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/04/24/cayenne-plugin/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I have been playing with Shindig to create a datamodel to go behind the OpenSocial API. At first I thought it would be simple to use JDBC direct, but it turns out that the model has a reasonable number of dependencies and the entities are quite big. So, I decided to use Cayenne. The model is created and has some simple test cases, and it all appears to work. I did write a maven plugin to generate SQL scripts from the Cayenne model, so its supports about most major databases (about 8). Creating the model from some Java interfaces was quite easy, infact I did most of it by converting the java class into cayenne XML.

The SQL that this generates at runtime, when querying etc appears much cleaner than Hibernate.... from a DBA point of view.

- [https://source.sakaiproject.org/contrib//tfd/trunk/social-db/ The OpenSocial API Data layer](https://source.sakaiproject.org/contrib//tfd/trunk/social-db/)
- [https://source.sakaiproject.org/contrib//tfd/trunk/social-db/src/main/java/org/apache/shindig/social/opensocial/db/SocialMap.map.xml The Cayenne model](https://source.sakaiproject.org/contrib//tfd/trunk/social-db/src/main/java/org/apache/shindig/social/opensocial/db/SocialMap.map.xml)
- [https://source.sakaiproject.org/contrib//tfd/trunk/maven-cayenne-plugin/ A maven 2 Cayenne plugin that generates the SQL scripts for creating the DB](https://source.sakaiproject.org/contrib//tfd/trunk/maven-cayenne-plugin/)
