---
layout: post
title: 'Content Hosting Handler'
description: ""
date: Tue Jan 16 2007 21:51:55 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/01/16/content-hosting-handler/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
We now have a patch for trunk for Content Hosting Handler.. that works!

Thanks must go to John Fawcett who has been working hard at Caret for the past few months (part time) to eliminate all the issues and get it all working. As you may know the default Content Hosting Service implementation is a large area of Sakai and there are some complexities that make it difficult to extend.

So its now possible to provide an implementation of the ContentHostingHandler, inject it into the ComponentManager and then add a resource with a property naming the handler by spring id.

The content of the resource is then passed to that handler before the ContentEntity is resolved, hence 'mounting' the virtual resource.

We have done a simple read only filesystem implementation that allows the 'mounting' of a disk local to the Sakai server into resource using a simple XML file.

Our next target is a DSpace ContentHostingHandler.
