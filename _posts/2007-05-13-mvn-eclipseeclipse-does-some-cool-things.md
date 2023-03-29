---
layout: post
title: 'mvn eclipse:eclipse does some cool things'
description: ""
date: Sun May 13 2007 12:17:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/05/13/mvn-eclipseeclipse-does-some-cool-things/
categories: "Apache Maven, Development Tools, Eclipse, IntelliJ IDEA, Thought"
hero: ../../../defaultHero.jpg
---
Not having tried this much before I wasn't certain what it did exactly, but once you have fully populated pom's in you project, a quick mvn will sync all the .settings, .project and .classpath files that eclipse uses suitable for use in eclipse. The really great bits are, 1) it knows about transitive deps and adds those where necessary 2) it know about source code and if you do a mvn -DdownloadSources=true eclipse:eclipse it will download the sources, wire in the javadoc etc. It also knows about projects in the same package, referencing those directly.

Potentially, if we adopted the layout structure that the plugin builds, we wouldn't need to have any .classpath, .project or .settings files in SVN, as all developers would to would be a quick mvn -DdownloadSources=true eclipse:eclipse to generate all the eclipse specific files from the pom.xml's.

This would be a huge benefit reducing the work syncing the eclipse settings and allow those who want to use Idea or another supported IDE to do the equivalent.
