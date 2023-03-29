---
layout: post
title: 'JCRService + WebDAV Working'
description: ""
date: Sun Apr 15 2007 06:53:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/15/jcrservice-webdav-working/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I've now got the JCRService integrated into Sakai and working with Jackrabbits WebDAV library. The JCRService which exposes a the standard 170 API to Sakai is using a Jackrabbit implementation integrated into Sakai. The webDAV implementation uses Jackrabbits own webDAV libraries which have support for

- RFC 2518 (WebDAV - HTTP Extensions for Distributed Authoring
- RFC 3253 (DeltaV - Versioning Extensions to WebDAV)
- RFC 3648 (Ordered Collections Protocol)
- RFC 3744 (Access Control Protocol)
- DAV Searching and Locating (DASL)

There is still some work to do in AccessManager to get all the fucntions mapped and setup some sort of default structure, but so far performance looks good, about 1000 items representing 20MB goes up in &lt; 1Minute with some base level logging turned on. I expect this to drop a bit when the SakaiSecurity Service is fuly integrated.

[![JCRWebDAv Working](http://www.tfd.co.uk/blogs/sakaiblog/wp-content/uploads/2007/04/picture-9.thumbnail.png)](http://www.tfd.co.uk/blogs/sakaiblog/wp-content/uploads/2007/04/picture-9.png "JCRWebDAv Working")
