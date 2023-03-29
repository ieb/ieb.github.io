---
layout: post
title: 'More on Maven 2'
description: ""
date: Wed Dec 06 2006 12:33:29 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/06/more-on-maven-2/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
After looking at the options, and being pointed at an XSL by Dave DeWolf, I've written a script that scans the Sakai code base and converts all project.xml files to poms and the builds the necessary multiproject module definitions.

Its not perfect yet, but its getting there. Unfortunately since we extended project.xml format and added properties to define the deploy type, I've had to modify the standard conversion script to make it Sakai specific. There will still be a need for a plugin, but probably only for the deploy part of the build.

There are 2 options here, a maven1 plugin for maven2, or take the pluto deploy plugin and extend it to include deployment of components. Since we may be deploying 168 components in the future, the pluto approach has merits.

When I have something that builds I will post the conversion scripts.
