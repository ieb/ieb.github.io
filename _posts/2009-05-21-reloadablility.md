---
layout: post
title: 'Reloadablility'
description: ""
date: Thu May 21 2009 12:40:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/05/21/reloadablility/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I have been using reloadability a lot recently in OSGi and its is great, but being great does depend largely on the developer. Its rather like reloading webapps. If the component is working well, and the developer hasn't done anything to cause a problem then a bundle in OSGi will reload over and over again, if however they have captured resources and dont conform to the life-cycle methods of whichever bundle activation flavor they are using then reloading will fail. Not necessarily immediately, but at some point. For example, other bundles may depend on the reloaded bundle and they may not correctly re-set their internal state, or just occasionally some sort of lockup might happen as below.

```
21.05.2009 12:29:18.900 *INFO* [SCR Component Actor] org.apache.sling.servlets.resolver Service [ServletResourceProvider for Servlets at [/apps/sling/user/update.POST.servlet],141] ServiceEvent UNREGISTERING
21.05.2009 12:29:18.901 *INFO* [SCR Component Actor] org.apache.sling.servlets.resolver Service [ServletResourceProvider for Servlets at [/apps/sling/fs/folder/GET.servlet],157] ServiceEvent UNREGISTERING
21.05.2009 12:29:18.902 *INFO* [SCR Component Actor] org.apache.sling.servlets.resolver Service [ServletResourceProvider for Servlets at [/apps/sling/servlet/default/modifyAce.POST.servlet],144] ServiceEvent UNREGISTERING
21.05.2009 12:29:18.903 *ERROR* [SCR Component Actor] org.sakaiproject.kernel.messaging [org.sakaiproject.kernel.messaging.OutboxListener] The deactivate method has thrown an exception (java.lang.NullPointerException) java.lang.NullPointerException
 at org.sakaiproject.kernel.jcr.JCRServiceImpl.getObservationManager(JCRServiceImpl.java:286)
 at org.sakaiproject.kernel.messaging.OutboxListener.deactivate(OutboxListener.java:120)
 at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
 at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
 at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
 at java.lang.reflect.Method.invoke(Method.java:585)
 at org.apache.felix.scr.impl.ImmediateComponentManager.disposeImplementationObject(ImmediateComponentManager.java:269)
 at org.apache.felix.scr.impl.ImmediateComponentManager.deleteComponent(ImmediateComponentManager.java:150)
 at org.apache.felix.scr.impl.AbstractComponentManager.deactivateInternal(AbstractComponentManager.java:521)
 at org.apache.felix.scr.impl.AbstractComponentManager.access$200(AbstractComponentManager.java:36)
 at org.apache.felix.scr.impl.AbstractComponentManager$4.run(AbstractComponentManager.java:204)
 at org.apache.felix.scr.impl.ComponentActorThread.run(ComponentActorThread.java:85)
21.05.2009 12:29:18.904 *INFO* [SCR Component Actor] org.sakaiproject.kernel.jcr Service [org.sakaiproject.kernel.jcr.support.JCRNodeFactoryServiceImpl,165] ServiceEvent UNREGISTERING
21.05.2009 12:29:28.858 *ERROR* [FelixPackageAdmin] org.apache.sling.jcr.jackrabbit.server stopRepositoryPinger: Timed waiting for thread Thread[Repository Pinger,5,main] to terminate
^C21.05.2009 12:32:25.063 *INFO* [Sling Terminator] Java VM is shutting down
21.05.2009 12:32:25.063 *INFO* [Sling Terminator] Stopping Sling
^C

^C^C
```

^Z kill -9 is just about all I can do in this instance.

At the moment all the evidence is pointing to reloadability being a useful tool in development, but unless you are prepared to access unscheduled downtime, not something that should seriously be considered for production. (unless you are prepared to put in the QA effort on all bundles to check as a set any one of them will reload with no side effects).
