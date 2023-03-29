---
layout: post
title: 'Reimplementing JCR'
description: ""
date: Mon Mar 26 2007 10:25:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/26/reimplementing-jcr/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I'm having another go at implementing A JCR based service in Sakai, this time I'm not binding it to CHS as I want to see if its possible to solve the clustering issues with Jackrabbit 1.2.3. So far the structure looks interesting, javax.jcr.\* lives in shared and with a very small additional API, used can get hold of a JCR session, which my be authenticated as system, anon or a Sakai user. Once they have this they can manipulate the repository using all the normal JCR/JSR-170 API features.

The implementation is a Jackrabbit one, that uses a JAAS based Login Manager and a Custom Secirity manager to connect to Sakai. I am allowing as part of the public API users of the JCRService to rejuster SecurityConverters that convert the pure JCR locks into more meaningful Sakai locks and the pure JCR references into Sakai security realms. This is an inject on init pattern as used by the Portal for its URLHandlers and RenderService Impl.

The Hope is that, with some work it will be possible to run implement other JCRServices using Harvest Road, Xythos, Alfresco or others and it should be possible to bind to these over JCR-RMI allowing Sakai to use an Institutional JCR. When we looked at this in the past the JCR inside CHS had too many bindings that were going to make it hard work to use other JCR's.

Naturally with the new Content Hosting Handler mechanism in CHS 2.4 it will be possible to write a simple CHH bridge to the JCRService to allow content to be hosted there, although I suspect some new test tools will just bind direct as the JCR API is more powerful and feature rich. Unfortunately its also more difficult to use, so I can see a JCREasyService being created.

Not to write a bundle of Unit tests to stress the system. Perhapse I can just re-user Jackrabbits own test suite with a suitable startup/teardown combination... mocking the cover for UserDirectoryService is going to be fun :)
