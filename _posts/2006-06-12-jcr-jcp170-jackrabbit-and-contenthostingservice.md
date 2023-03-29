---
layout: post
title: 'JCR JCP-170 JackRabbit and ContentHostingService'
description: ""
date: Mon Jun 12 2006 09:34:13 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/12/jcr-jcp-170-jackrabbit-and-contenthostingservice/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
As I start to look more at ContentHostingService and the JCR API it looks like the address the same problem, with different positions in the Content stack. Sakai Content Hosting Serivce API has been bound to by many of the tools in Sakai. Changing this API would be a significant investment with widespread impact. JCR API is a standard, and although complete appears to be missing some features that the Sakai Content Hosting Service uses. My interpretation, perhapse incorrect, is that JCR does not support the fine grained access control that exists within Sakai Content Hosting Service. There is however a mechanism for injecting the concept of a user into the JCR, but that mechanism feels like representing a user of the JCR rather than a user of Sakai. This, perhapse is a philisopical standpoint.

In some RDBMS applications, users are real users of the database, with permissions controlled within the database. In many web applications, the user becomes a concept of the application, and the connection to the database represents a role the application is playing with respect to the database.

One approach with JCR is to say that applications connection to the JCR represents a role within the JCR, and the application user is simply a user of the application. If that is the case, then a Content Hosting Service stack in Sakai might look like this.

Tools and Other services connect to

a Content Hosting Service which is implementated as

a thin Content Hosting Service shim implementation that talks to

JackRabbit JCR.

Concepts that are core to Sakai are implemented in the shim and concepts that are core to the JCR are implemented by the JCR. Care will have to be taken to ensure that there are no tight bindings between the Shim and the JCR. If we do this, deployers could choose to any JCR that had sufficient features.

Having had a quick look at the JCR and Jackrabbit implementation, I feel that this approach might be significantly less work than implementing a full Content Hosting Service from scratch.
