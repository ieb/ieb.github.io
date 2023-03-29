---
layout: post
title: 'OSGi version resolution'
description: ""
date: Sun Oct 05 2008 10:55:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/10/05/osgi-version-resolution/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
OSGi version resolution looks great, but there is a problem that I am encountering. I can deploy more than one version of a jar as seperate OSGi bundles, but unless the consuming bundle was explicity written to specify a range of versions that bundle will not start.

Bundle A was built with a dependency on package org.apache.commons.useful;version=1.0.2, which means any version > 1.0.2.

I deploy bundle B with org.apache.commons.useful version 1.0.4, great no problem.

Bundle C depends on org.apache.commons.usefull;version=1.0.8,

So I deploy bundle D with 1.0.8, great for Bundle C, but now Bundle A can see 1.0.4 and 1.0.8 and wont start, due to a constraint violation.(at least in Felix).

To make this work I have to go back to bundle A, and rebuild it with version="\[1.0.2,1.0.8)" meaning "I depend on any version >= 1.0.2 and &lt; 1.0.8|. Thats all fine, but, now every time I add a second version of a jar to OSGi, I have to go back and repackage all the bundles that dont have precise enough version numbers.

You might argue 1.0.4 and 1.0.8 are equivalent so dont deploy bundle B anymore, but the same problem happens when you try and deploy bundles container 2.0.6 and 2.5.5 when 2.5.5 is not fully backwards compatable.

Worse, this also means if I took any 3rd party bundles without precise version ranges, I will have to work out how to rebuild them. Not exactly and inviting task when you have > 100 bundles in a container. Makes me wonder if its worth all the hassle.
