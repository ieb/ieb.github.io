---
layout: post
title: 'Why Class Extension Pattern with Inner Classes is Bad'
description: ""
date: Wed Jun 13 2007 16:44:06 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/06/13/why-class-extension-pattern-with-inner-classes-is-bad/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I'm not against class extension patterns, most of Java is based on it and makes sense, but when you have a class extension model, coupled with inner classes and interfaces, the programmer can express all sorts of bad behavior.

Take the instance where there is a class,A that extends a class,B that extends a class,C. Class C is the generic impl, Class B is the specific and Class A is the heavily bound to say a DB.

Once class B contains inner classes and interfaces, instanced in B and bound to in A, you cant easily extend the classes and inner interfaces in B.

And if the behavior in A (the last in the extension model) overrides the behavior in B, and B adds functionality, you have to constantly search A to check that you don't need to override as well.

Finally, inner classes tempt you into binding to properties of the parent, binding the inner instance forever inside the parent class.

Small inner classes are probably Ok, but big ones with a tangled web of connections are a pain to work with.

IMHO (having just pulled one of these webs apart to make it compatible with IOC)
