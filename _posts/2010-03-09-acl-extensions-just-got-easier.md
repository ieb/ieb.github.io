---
layout: post
title: 'ACL extensions just got easier'
description: ""
date: Tue Mar 09 2010 17:13:09 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/03/09/acl-extensions-just-got-easier/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Extending the types of ACLs in Jackrabbit 1.x was hard. After, 1.5 where there was a reasonable ACL implementation, much of the code that managed this area was buried deep within inner classes inside the DefaultAccessManager and related classes of Jackrabbit 1.5/1.6. In Jackrabbit 2 as part of the improvement to the UserManager (I guess) its become much easier to make extention. I had a patch that modified the core classes of ACLEditor, ACLProvider, ACLTemplate in JR1.5 allowing the injection of a class that would control the way in which Access Control Entries were collected for a node. This allowed things like dynamic principal membership to be implemented (eg membership of a group that is determined by a rule set, and not a membership record). The upside, was this was possible in 1.5, the downside was that it was hard and required re-implementation of some of the core classes, in the same package space to get round private, protected and even code blocks based on class names. So the patch was huge and hard to maintain.

In JR2, inside the acl.ACLProvider there are protected methods designed to be overridden. You still have to do this inside the same package as the native JR2 classes, in order to instance private internal classes, but at least extending the default ACL resolution in Jackrabbit is a case of extending a few classes. All of this put inside an OSGi environment makes it possible to re bundle an embedded Jackrabbit server with custom extensions on the core... and no need for a massive patch set.... another reason to upgrade to JR2.
