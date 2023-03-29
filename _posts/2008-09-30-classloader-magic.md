---
layout: post
title: 'Classloader Magic'
description: ""
date: Tue Sep 30 2008 15:18:40 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/30/classloader-magic/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
OSGi has classloader magic, although its not really that much magic. Once into a runtime of a JVM a class is an instance of the class information bound to the classloader that instanced that. So when binding to the class, its both the classloader and the class that identifies this instance. All those ClassCastExceptions that everyone shouts out... "you stupid program .. those are the same class " ... only to realise some time later that you were the stupid one. Perhapse ClassCastExceptions have the wrong name since they really talk about the class instance rather than class type although that may just be becuase many developers think of class as type.

So there is no classloader magic, all that OSGi classloaders do it to work together though a shared registry of resolver instances of specific versions of class types. Having don't that, the class instance becomes available.

The shared space that is normally used by the typical parent classloader as seen in tomcat applications becomes a slightly more intelligent classloader that maintains a virtual shared space of exported packages. The interesting part witll be to see if its possible to use this same type of classloader as the basis for a webapplication context, then the shared space will become a window into a group of OSGi classloaders each managing their own set of internal class instances and exported class instances.
