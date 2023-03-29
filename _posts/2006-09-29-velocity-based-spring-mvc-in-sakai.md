---
layout: post
title: 'Velocity Based Spring MVC in Sakai'
description: ""
date: Fri Sep 29 2006 21:39:47 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/29/velocity-based-spring-mvc-in-sakai/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Well it is possible, but you have to rewrite the Spring MVC view resolver and the Velocity Configurer so that neither extend any Spring framework classes, otherwise they will want to drag Velocity into shared. Once you have done that, it works like a dream, except that you cant easily get the templates onto the filesystem.

They work just fine in the classpath, but to get a ResourceLocator to know about the filesystem it has to have a ServletContext. In a normal environment this would be easy, just do it from the request.getSession().getServletContext().... but in Sakai, thats a Wrapped request and you cant get the servlet context that way. So the robust, but slightly complex way of doing this is to. Put a Spring bean into applicationContext.xml that can hold a ServletContext, then have a ServletContextListener that starts after the Spring ContenxtLoaderListener and injects the ServletContext into the holder. Then the holder itself can be injected into the springapp-servlet.xml as a dependency, so when the VelocityConfigurer starts up it can set the ServletContext in the instance of the Velocity Engine bound to the web app. You cant use a singleton Velocity engine, since it would be the only one in the JVM...... then...... the standard WebappResourceLoader can get gold of the ServletContext, via rsvc in ResourceLocader and hence the real path to a template on the filesystem..... lost yet :)

Perhaps I'll make a jar of this as the same applies to any tightly bound SpringMVC view technology.
