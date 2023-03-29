---
layout: post
title: 'Linear Classloaders and OSGi'
description: ""
date: Thu Sep 04 2008 23:31:31 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/04/linear-classloaders-and-osgi/
categories: "cayenne, hibernate, osgi, Thought"
hero: ../../../defaultHero.jpg
---
OSGi does not remove all classloader problems as can be seen from <http://www.osgi.org/blog/2008/07/qvo-vadimus.html> and <http://www.osgi.org/blog/2007/06/osgi-and-hibernate.html> where the Peter Kriens notes that

_"Hibernate manipulates the classpath, and programs like that usually do not work well together with OSGi based systems. The reason is that in many systems the class visibility between modules is more or less unrestricted. In OSGi frameworks, the classpath is well defined and restricted. This gives us a lot of good features but it also gives us pain when we want to use a library that has aspirations to become a classloader when it grows up."_

It turns out that some JPA solutions are OSGi friendly, others are not. It all depends on what is done to load the persistence.xml and the related classes, and then the proxy classes cause further classloader problems.

I guess, since the author is Peter is OSGi Director of Technology, he knows what he is talking about.

Apparently EclipseLink was written to be OSGi friendly, and non-proxy, classloader clever ORM solutions also work, Cayenne falls into this group, and reportedly works OK in side OSGi, although I don't know if that's v2 or v3
