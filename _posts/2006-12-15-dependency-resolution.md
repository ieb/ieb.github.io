---
layout: post
title: 'Dependency Resolution'
description: ""
date: Fri Dec 15 2006 14:31:58 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/15/dependency-resolution/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Maven 2 dependency resolution is a wonderful thing, but its not quite there in 2 when you have multiple classloaders and dont necessarily want the transitive dependencies to flow through. In sakai in Maven 1 we defined everything explicitly, but in maven 2 I find that jars in the shared classloader creep into the components packaging and and webapp packaging. The only way to stop this is to make the jar provided, but if that is done the dependency does not flow, so you cant make a dependency transitive up to a war file and then not pack it. Its all or nothing, provided or not and packed.

The solution, as in maven 1 appears to be explicit which eliminates one of the nicest features of maven 2.... however there is a sting in the tail to all of this. There are many 3rd party components that we use in sakai, that we bundle into wars. These have transitive dependencies that we are already providing for in shared, hence the only way to prevent packing is to explicitly re scope the dependency as provided... bloating the pom and increasing the overhead... just the thing maven 2 was supposed to help with. Looking at the maven jira, much of this will be fixed in 2.2 .
