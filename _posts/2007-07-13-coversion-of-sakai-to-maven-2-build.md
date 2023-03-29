---
layout: post
title: 'Coversion of Sakai to Maven 2 build'
description: ""
date: Fri Jul 13 2007 21:33:44 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/07/13/coversion-of-sakai-to-maven-2-build/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
A long time ago, we started the conversion work on Sakai to make it use a Maven 2 build, partly because it promised to give us better control over dependencies but also because many of the projects we use in Sakai were also moving to a maven 2 build.

Sakai has many classloaders, which pushes the boundaries of what maven 2 can do to define and categorize dependencies and how they are packed. In fact maven 2.0.4 had some bugs that were not fixed until 2.0.6 that made it rather difficult to express these classloader boundaries. We are now at maven 2.0.7 and I, with the help of Alistair Young from University of Highlands and Islands (UHI)... the Glaswegian who made everyone laugh about Shibboleth at Amsterdam... have migrated the build to a hierarchical build structure based on project boundaries. We have check the deployment profile of all the wars to make certain they are cleaner than the maven 1 build.

So, if you have a maven 1 project in contrib or provisional that is not part of the main build, I am sorry I we haven't been able to convert your project, there are just too many of them... here is how the build structure works.

In /master/pom.xml we define with dependencyManagement the contents of the shared and common classloaders, so that if your project depends on a shared of common jar, it will be automatically excluded from a pack operation. If your project is provisional or contrib, then you will have to manually exclude your shared jars as they are not part of the "official" shared/common profile.

The base project of sakai (called groupId org.sakaiproject artifactId base ) has the master project as a parent. Your project should have the base pom as its parent. Then all child poms in your project should have the base pom of the project as a parent.
