---
layout: post
title: 'Sling Virtual Paths, ResourceProviders'
description: ""
date: Wed Sep 30 2009 18:01:17 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/09/30/sling-virtual-paths-resourceproviders/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I feel guilty and bad, I have a patch against the core of the Sling engine for resolving what I call virtual resources, but that patch is against implementation code and breaks with an annoying regularity as well as requiring the Sling Resource bundle to be unpacked, patched and repacked. There has to be a better way. I did refactor this to eliminate most of the code changes, and thats in SLING-1129, but IMHO its still not great.

I think it should be possible to make the Sling Resolution process generate Resource implementation for virtual paths, and infact there is a SyntheticResource for this purpose. The way to generate resources is using a ResourceProvider implementation, when one of these is created, its bound to a path and there can only be one ResourceProvider at any one path location. This, IMHO is very un Sling like, where most things are bound to metadata like the sling:resourceType and never bound to hard coded paths.

So, I am still searching how to create a SyntheticResource or VirtualResource as a result of a request to an arbitrary location. I would like to be able to register a priority ordered list of ResourceProviders at any point in the list enabling me to add more than one ResourceProvider at "/", or, perhaps a linked list of ResourceProviders at any one location. Still searching.
