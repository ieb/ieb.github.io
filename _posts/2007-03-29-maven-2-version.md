---
layout: post
title: 'Maven 2 Version'
description: ""
date: Thu Mar 29 2007 17:59:02 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/29/maven-2-version/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
You may have noticed that the maven 2 build has M2 all over it. This was to avoid conflicts with the maven 1 builds, but we need to be able to build everything to particular versions. This is not quite as easy as with maven 1 where project.properties allowed you to build a specific version.

In Maven 2 the mechanism appears to be the settings.xml file, where properties can be defined. At some point I need to change all the M2 references into \${sakai.build} references and provide a settings.xml file to define what sakai.build is, alternatively a simple mvn command could be used, eg mvn -Dsakai.build=2.4. The drawback with thins is that its not bound to SVN so when you check out the 2.4 tag you have to know howto build. Perhaps a build.sh and build.bat would make sense. However we do it we need to be able to build different version bound to SVN without editing the entire pom tree...... but then on release a find sed combination wouldn't be so bad ? (runs for cover)
