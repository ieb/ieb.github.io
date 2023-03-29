---
layout: post
title: 'Component Loaders'
description: ""
date: Fri Nov 23 2007 08:56:56 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/11/23/component-loaders/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I have been looking at an alternative mechanism of loading non webapp components in sakai for about 2 weeks. Currently we load the component manager as a side effect of webapp startup. Using a static ComponentManager factory means that the first thing to access it causes it to startup. Consequently, the first webapp with a context listener will perform a start-up. There is nothing particularly wrong with this other than the lack of control over the startup and lifecycle of the component manager, coupled with the need to have a static ComponentManager factory.

So, I have written a Tomcat Container Lifecycle listener that attaches to the base Container Lifecycle. This starts the component manager, as a bean not a static factory, and then registers a JMX MBean that is used as the holder. So we get full control of the startup of the Component manager, its classloader structure and we can manage it through JMX (ie start and stop it). The component manager starts up before any webapps start and so are not tied to the lifecycle of the webapp it started in.

In addition the component manager is now a normal bean implementing and interface, there is a proxy bean that enables consuming components to do a new ComponentManagerProxy(); a bean they own, which connects to JMX managed component manager. It should now be easy to create unit tests that run inside eclipse without the entire framework.

In addition to the component manager loader, I have a hook into the Host container inside tomcat that allows us to control the startup of each webapp. This will enable us to replace the classloaders of the webapp with something that makes better use of perm space and binds to the component manager structure.

The drawbacks of this approach is that the container needs to be targeted, but its already clear that this is required since the classloader structure of tomcat 6 is totally different from tomcat 5. Performing the start-up in this way isolates the classloader setup and gives us the felexability to choose a scheme that suits our needs.

Currently I have implementations for tomcat5 and tomcat6. WebSphere community edition uses tomcat 6 as a webapp container. I haven't looked closely at WebLogic, Glassfish or JBoss, but they do have some sort of container lifecycle below the J2EE lifecycle so it should be possible to apply the same approach. The code is in branch https://source.sakaiproject.org/svn/component/branches/SAK-12134 but be warned, at the time of writing this code is wild west.
