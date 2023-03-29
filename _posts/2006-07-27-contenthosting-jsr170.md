---
layout: post
title: 'ContentHosting JSR-170'
description: ""
date: Thu Jul 27 2006 10:03:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/07/27/contenthosting-jsr-170/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
For those who dont know JSR-170 is the Java Content Repository specification. Apache has recently released a 1.0 implementation with Jackrabbit, which looks good. Day Software who formed a large part of that project are using something similar in commercial products that they sell. If you believe their web site (no reason not to) they have some solid names as customers.

For those who don't know, Sakai has a Content Hosting Service, that uses a proprietary implementation that has survived and been improved from the Chef days.

Having done a bit of work in Content Hosting already, producing a plugin mechanism as a patch in Sakai 2.1.2 and 2.2, I feel that it has some shortcomings. These observations are not a criticism as it does what is does very well. But I feel that there are some aspects of the implementation that get in the way. For instance, Collections and Resources are separated objects. The storage of objects or nodes within the content hierarchy is done in such a way as to make extension difficult. I have a feeling that the data access patterns are causing performance problems with WebDAV.

Rather than whine about it to the community, I've decided to have a go at using a JCR under the ContentHostingServce to re-implement this service. If it works it might mike life easier.

Jackrabbit performance looks good and the storage architecture matches what is implemented in Sakai so should work in a cluster. The intention is to use the Jackrabbit WebDAV, and inject the Sakai security model at the service level. The JCR will become akin to an RDBMS, where a back end users acts on behalf of a role in the front end.
