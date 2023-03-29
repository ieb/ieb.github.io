---
layout: post
title: 'Bundling larger OSGi components.'
description: ""
date: Fri Jun 04 2010 12:10:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/06/04/bundling-larger-osgi-components/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
At the moment, I am bundling the James IMAP server with the JCR backend into OSGi. I could add all the jars to the OSGi Container, but I already have about 150 classloaders and dont really want to add more, so rightly or wrongly I am creating a larger bundle with most of the dependencies isolated inside the bundle. Wrongly the OSGi purists scream. James servers typically use Pheonix, being awkward, I want to bring the James IMAP server up standlone only creating what is absolutely necessary, so I am not using Pheonix to configure, I am instancing a custom NIOServer extending the default ImapServer based on the same. James servers, if you let BND analyse the classes, require lots of things, most of which I dont think I will be using. Things like Spring, Torque, Ant Tools, and getting well over 1000 packages just right in an OSGi Manifest is a bit of a pain. Once its right, you will be thankful you took the time, if not ask the OSGi purists who are now crawling up the walls and screaming. So here is the approach I am taking, which appears to be relatively painless (note, relatively):

1. Add packages to the Ignore Package maneifest header, until the bundle starts.
2. Once the bundle starts, add Embedded Jars to the bundle to eliminate class not found errors, except, where you know that the package should be available from the container.
3. If you see a NoClassDefError, then the class is probably available from the OSGi container (exported from another bundle) but it cant be loaded because you dont have a policy that says it could be loaded, so add an import. NoClassDefError means that classloader cold not get the bytecode stream for the class. This error depends on the OSGi framework in use, ymmv. But look at the **last** exception in the stack, not the first.

There are better ways of doing this I am certain, but if you really do want to take a small part of a larger project and rebundle it, then this appears to work. Doing the same as a trial and error process really is like trying to shoot rabbits in the dark. (not that I have tried that one).

And I should add, James 3 is really nice.
