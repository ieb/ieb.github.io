---
layout: post
title: 'Hierachy Service'
description: ""
date: Thu Sep 07 2006 23:24:44 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/07/hierachy-service/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I've started to think about the hierarchy service. Im thinking about a Hibernate Managed (with lazy connections) object tree, on the basis that access is read mostly. This greatly simplifies the API and usage. To avoid issues with Entity names, the path, which will be stored in the object will he SHA1 hashed to generate the Unique node id. So we can have node paths upto 4K long.

There permissions will be handled by mapping the path to realms in the security service, but to avoid problems with performance the inherit property of the node will be defined in the node itself. This will make it quick and easy to locate the node.

see <https://source.sakaiproject.org/contrib/tfd/trunk/hierarchy>

Here's the api. When the details of the Hierarchy and HierachyProperties have crystallized, I'll push them to contrib or post them here.
