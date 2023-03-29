---
layout: post
title: 'Confusing, but logical ItemExistsException'
description: ""
date: Tue Nov 03 2009 16:50:53 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/11/03/confusing-but-logical-itemexistsexception/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
In Jackrabbit, if a session does not have permission to read an Item in the repository, a AccessDeniedPermission is thrown. In Sling this appears as a 404 at http which makes perfect sense (until I start to think about it). However if you suspect the item really does exist, you can try and modify the item. The result is an ItemExistsException, at the Jcr layer confirming that the AccessDeniedPermission on read was correct, the item exists but you cant write to it. What is confusing is that session.itemExists() returns false, and Sling gives a 404, both trying to hide the information, but its all to easy to use the update operation to determine if the information isnt there, or if you dont have read on it.

An example exception is

```


/private/9b/ba/25/71/user1_1257266276 is [[/_user/private/9b/ba/25/71/user1_1257266276/rep:policy/allow][false][user1-1257266276], [/_user/private/9b/ba/25/71/user1_1257266276/rep:policy/deny0][true][everyone], [/rep:policy/allow0][true][everyone]] <br>
allows(-wPR-)denies(-----)allowPrivileges(-wPRC)denyPrivileges(-----)parentAllows(-----)parentDenies(-----)[/_user/private/9b/ba/25/71/user1_1257266276/rep:policy/allow][false][user1-1257266276],LocalAllow <br>
allows(-wPR-)denies(r----)allowPrivileges(-wPRC)denyPrivileges(r----)parentAllows(-----)parentDenies(-----)[/_user/private/9b/ba/25/71/user1_1257266276/rep:policy/deny0][true][everyone],LocalDeny <br>
allows(-wPR-)denies(r----)allowPrivileges(-wPRC)denyPrivileges(r----)parentAllows(r----)parentDenies(-----)[/rep:policy/allow0][true][everyone],NotLocalAllow <br>
allows(-wPR-)denies(r----)allowPrivileges(-wPRC)denyPrivileges(r----)parentAllows(r----)parentDenies(-----)[/rep:policy/allow0][true][everyone],LocalAllow <br>
03.11.2009 08:37:57.201 *INFO* [127.0.0.1 [1257266276921] POST /_user/private/GetAllProfilesTest1257266276.html HTTP/1.1] org.sakaiproject.kernel.resource.AbstractPathResourceTypeProvider  /_user/private/9b/ba/25/71/user1_1257266276/GetAllProfilesTest1257266276 is a virtual file, base is /_user/private <br> 
03.11.2009 08:37:57.207 *ERROR* [127.0.0.1 [1257266276921] POST /_user/private/GetAllProfilesTest1257266276.html HTTP/1.1] org.apache.sling.servlets.post.impl.operations.ModifyOperation <br>Exception during response processing.
javax.jcr.ItemExistsException: /_user/private/9b/ba/25/71/user1_1257266276 <br>
at org.apache.jackrabbit.core.NodeImpl.internalAddChildNode(NodeImpl.java:777) <br>
at org.apache.jackrabbit.core.NodeImpl.internalAddNode(NodeImpl.java:729) <br>
at org.apache.jackrabbit.core.NodeImpl.internalAddNode(NodeImpl.java:677) <br>
at org.apache.jackrabbit.core.NodeImpl.addNode(NodeImpl.java:2093) <br>
at org.apache.sling.servlets.post.impl.operations.ModifyOperation.deepGetOrCreateNode(ModifyOperation.java:709) <br>
at org.apache.sling.servlets.post.impl.operations.ModifyOperation.processCreate(ModifyOperation.java:216) <br>
at org.apache.sling.servlets.post.impl.operations.ModifyOperation.doRun(ModifyOperation.java:89) <br>
at org.apache.sling.servlets.post.AbstractSlingPostOperation.run(AbstractSlingPostOperation.java:87) <br>
at org.apache.sling.servlets.post.impl.SlingPostServlet.doPost(SlingPostServlet.java:173) <br>
at org.apache.sling.api.servlets.SlingAllMethodsServlet.mayService(SlingAllMethodsServlet.java:143) <br>
at org.apache.sling.api.servlets.SlingSafeMethodsServlet.service(SlingSafeMethodsServlet.java:338) <br>
at org.apache.sling.api.servlets.SlingSafeMethodsServlet.service(SlingSafeMethodsServlet.java:369)
```

There are 2 implicatons here.

- If using the if ( !session.itemExists(path) ) { .... session.addNode(path) ... } pattern you should expect an ItemExistsException to be thrown and handle appropriately.
- If the aim of a 404 is to hide the existence of information, then it doesn't work, perhaps it really should be a 403 every time since its easy enough to bypass the 404, and emitting a 404 implies that client code can create a node that doesn't exist.
