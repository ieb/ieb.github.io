---
layout: post
title: 'Section Group Support for Wiki in Sakai'
description: ""
date: Fri Jun 09 2006 00:05:19 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/09/section-group-support-for-wiki-in-sakai/
categories: "RWiki, Thought"
hero: ../../../defaultHero.jpg
---
There is already some support for Groups and Sections in Sakai RWiki. This is basic support that connects a Wiki SubSpace to a Worksite group. If the connection is made (by using the name of the group as the SubSpace name), permissions are taken from the Group permissions. There is a wiki macro that will generate links to all the potential Group/Section SubSites in a Worksite (see the list of macros in the editing help page)

This is a simple approach that is probably understandable, but its not exactly sophisticated or flexible. So, being a glutton for UI punishment, we have started to open up the concept further.

The concept is, that for any node in the Wiki hierarchy, thats Wiki Pages or Wiki Subsites, you (an maintain or admin user) can configure which permissions 'realm' is associated with the node, edit the permission on the roles, add/delete roles in that 'realm', modify permissions associated with the role, add/remove users from a role.

A can of worms! The challenge is not in creating the functionality, any thing is possible. The challenge is with creating a UI that doesn't confuse the hell out of anyone other than the developer that created.

One view on this is that its better to stick with simple statements that control the permissions and not expose the full power of the underlying permissions system. Such a statement might be 'Lock this page'. I think I agree with that for an access type users, but for a user who is maintaining a worksite, this may not be enough power. I am going to have to do many mock ups to uncover all the issues. The advanced permissions editing may not make 2.2.
