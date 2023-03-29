---
layout: post
title: 'Dynamic Groups'
description: ""
date: Thu May 07 2009 14:53:15 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/05/07/dynamic-groups/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
We have been looking hard at how AuthZ works in Jackrabbit and Sling. Not least that JCR Sessions are considered expensive objects, even though they typically take &lt; 1ms to initialize. The reason they are considered expensive, is not the cost of creating one, but the potential long term cost. Hence sessions are pooled for reuse but the selection strategy looks for a free session bound to the user before taking one from the pool of all sessions. Obviously the session is cleaned prior to being bound to another user.

So what's being stored in the session? The Jackrabbit AccessControlManager and SecurtityManager works in such a way as new instances of these classes are created for every session. This generates the opportunity to cache access control information bound to the session, which is one of the things that makes the DefautlAccessManager very fast in both Jackrabbit 1.5 and later, and the new JCR2 implementation in trunk. This structure gives some insight into the way that access control is going in Jackrabbit for the JSR-283 implementation. The particularly interesting part is that this access control mechanism, bound to the user session, compiles the access control list at any one node for the user into a bitmap. This makes the resolution of permissions a fast bitwise or of permission. This compiled access control list for the node is cached with the user bound session, resulting in much faster ACL resolution.

So how does this compare with the AuthZ mechanism that was created for Kernel2. Well its faster for starters, but it doesn't have quite as wide a capability. Since the compiled access control list is a bitwise or, it has no order. This makes it harder to deny access since the mechanism tends to grant rather than deny. The approach does however make the permissions simpler in nature since the processing order does not matter. The other main different is that the users, in the Jackrabbit/Sling world have a pre-defined set of Principals that can be determined. Only entries in the access control list marked with a principal that the user has are applicable to the user. You can think of a Principal and a group interchangeably. So in Jackrabbit/Sling Principals that a user has is deterministic within the Jackrabbit instance. ie "Give me all the groups I am a member of" generates a static list of group.

This sounds fine for Sling but in Sakai we have a number of use cases where the membership is not static. We have groups where you only know you are a member of that group by asking the question "Am I a member of group B?" because group B does not appear in the answer to "Which groups am I a member of ?". This is particularly true if the system that can answer the "Am I .. " question is external and only has that form of query. These are Dynamic Groups.

Another form of Dynamic Group is the a group where membership depends on context. eg "Am I a member of this Group B at 11:23 on a Monday morning ?", or "Am I a member of Group C if I wanted to look at this Blog posting ?". It may be hard to visualize why the question is being asked. Group C can allows a user to edit their own blog posts.

At the moment, I think Dynamic Groups are achievable with a small patch to Jackrabbit. The full impact of this is being looked at now, but its clear that with Dynamic Groups, the DefaultAccessManager in Jackrabbit 1.5 and the future Jackrabbit 2/JSR-283 will work for Sakai. The advantages of this are wide reaching since it means that much of the basic plubming code required for Sakai Kernel 2 is already present in Sling, leaving us, the future Sakai community to focus on teaching and research applications.
