---
layout: post
title: 'Why Spring and Hibernate cant be seperated'
description: ""
date: Thu Dec 27 2007 19:17:31 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/12/27/why-spring-and-hibernate-cant-be-seperated/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
After extracting the spring-core, spring-hibernate3 and all the various parts of Sakai, fixing the classloader issues surrounding IdGenerators etc, I find both Spring and Hibernate use CG Lib for proxies, and if you separate Spring from Hibernate, they fight over CGLib. Either Hibernate cant create proxies because it cant see the hibernate classes from CGLib or Spring cant get to CGLib because its not in shared. Looks like its not going to be possible to separate Spring and Hibernate into separate classloaders without providing some extra level of visibility between the classloaders.
