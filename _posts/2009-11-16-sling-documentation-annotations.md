---
layout: post
title: 'Sling Documentation Annotations'
description: ""
date: Mon Nov 16 2009 00:29:13 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/11/16/sling-documentation-annotations/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Its been noticed that documentation that is not in the same version control system as the code, is frequently not maintained. This leads to the users of the interfaces getting increasing fustrated as nothing appears to work, although to fair to the developers the users may well be looking at out of date documentation.

To address this in Sling/Sakai K2 I have just done a first pass at documentation annotations that are discovered at runtime to build a set of documentation for the Service. I say service, because Sling is OSGi based, and every HTTP service end point is implemented as a OSGi service implementing javax.servlet.Servlet. The approach could be used for any service, but I am using it for Sling Servlets.

How to use:

First off, all Servlets that are active in the system are automatically registered with the documentation system, and if any of them don't contain documentation there are some gentile reminders to the developer to create the documentation. If there are no documentation annotations present there are some _friendly_ defaults.

add the documentation annotations to you build

```
<dependency>
 <groupId>org.sakaiproject.kernel</groupId>
 <artifactId>org.sakaiproject.kernel.doc</artifactId>
 <version>0.1-SNAPSHOT</version>
</dependency>
```

So, add some annotations to your class:

```
@SlingServlet(methods = "GET", paths = "/system/doc")
@ServiceDocumentation(name = "DocumentationServlet", description = "Provides auto documentation of servlets registered with OSGi. Documentation will use the "
 + "service registration properties, or annotations if present."
 + " Requests to this servlet take the form /system/doc?p=&lt;classname&gt where <em>classname</em>"
 + " is the fully qualified name of the class deployed into the OSGi container. If the class is "
 + "not present a 404 will be retruned, if the class is present, it will be interogated to extract "
 + "documentation from the class. In addition to extracting annotation based documention the servlet will "
 + "display the OSGi service properties. All documentation is assumed to be HTML encoded. If the browser is "
 + "directed to <a href=\"/system/doc\" >/system/doc</a> a list of all servlets in the system will be displayed ",
 bindings = @ServiceBinding(type = BindingType.PATH, bindings = "/system/doc"),
 methods = {
 @ServiceMethod(name = "GET",
 description = "GETs to this servlet will produce documentation for the class, " +
 "or an index of all servlets.",
 parameters = @ServiceParameter(name = "p",
 description = "The name of the class to display the documentation for")) })

public class DocumentationServlet extends SlingSafeMethodsServlet {
```

And then rebuild and reload your Servlet.

Finally browse to <http://localhost:8080/system/doc> to check the documentation.

Obviously because the documentation is in the code and its deployed with the code, provided the developer keeps it current with the code they are editing, the documentation will be correct. So the next \$64K is "How to make developers document what they do ?"
