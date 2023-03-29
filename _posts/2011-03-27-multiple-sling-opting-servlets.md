---
layout: post
title: 'Multiple Sling Opting Servlets, '
description: ""
date: Sun Mar 27 2011 22:50:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/03/27/multiple-sling-opting-servlets/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Sling OptingServlets allow a servlet to be registered to a resource type and decide if its going to handle the resource. This sounds good, except that there is only one slot available per registration. If you have a resource type X, method GET and you want to have 5 Servlets registered to optionaly process requests against resource type X with no selectors and no extensions, then you cant do it.

The solution is to have a single Servlet registered as an Opting servlet per resource type, and have it manage a set of Servlet implementations that opt on that single registration. The only thing that you need to be careful about is to create a service interface that Sling wont pickup and register as a servlet, otherwise the likelihood is it will overwrite your Servlet multiplexer, and with 2 identical registrations of the same request/resource patter, its random which one will be active.
