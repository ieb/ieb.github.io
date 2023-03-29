---
layout: post
title: 'Note to self: JcrResourceResolver2, selectors and extensions'
description: ""
date: Fri Nov 13 2009 14:32:13 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/11/13/note-to-self-jcrresourceresolver2-selectors-and-extensions/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
This really is a note to myself, as I have a habit of forgetting this and spending ages debugging.

In JcrResourceResolver2.resolveInternal there is a loop that attempts to resolve a URI by selectively stripping off the segments of the last element using a . as a seperator. When a resource resolves the section of the path that resolves is used as the resource path, and the remainder is used as the resource path info. The selectors and extensions are explicitly parsed out of the resource path info ignoring anything that the ResourceProvider might have done. It is therefore vital not to attempt to process a path within a ResourceProvider, as the path used to determine the the resource path and the path info is local to resolveInternal and not influenced by anything that the ResourceProvider might choose to do.

There are one or two special cases. If no resource is found, the last element is processed in its entirety before a NonExistingResource is created and hence anything that gets involved in the ResourceProvider process should be very careful about creating Synthetic resources since unless a convention is followed the resource path cant be determined from the URL alone. Take the example of a virtual resource. Since its virtual and the resolution process is abstract, delayed until after resolution, nothing is known about the ultimate target. The convention we follow is that the last element cant contain '.' I think this is going to cause problem and result in moving the whole resolution process inside the resolveInternal call tree, putting any code in a modified Sling JCR Resource Bundle. Unlike previous attempts this will not require patching the code base, just repackaging, unless I can work out a sensible patch that avoids recursive resolution.

Sorry if that was very boring, as I said in the title Note to self.
