---
layout: post
title: 'OSGi Service Model is limited'
description: ""
date: Thu Apr 02 2009 13:20:21 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/04/02/osgi-service-model-is-limited/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I don't want to sound negative, but as always when you look past the hype and read the detail some of the truth comes out. Take OSGi Configuration Service. On the face of it this would allow each service to have its own configuration and allow you to bring a service up and let is manage everything. Well to an extent that is true, provided you adopt the ManagedService model. This means that OSGi manages all the services for you, you define what you want to be configured by using constants within your code or creating an xml file defining he configuration constants, and OSGi takes care of the rest. Sounds pleasant enough, and allows changes in configuration to be listened to by the components. Update the config, and its reflected in the component. So this works perfectly well for a single component with a single service impl exposing a single api, but as soon as your bundle contains a collection of services implementations that are constructed with IoC, then none of the services can be managed. In short the ManagedService places a boundary around the service implementation that prevents it from communicating with other services except via static instances, or something horrible.

The impression that you could use the OSGi Configuration Service at run-time or in a cluster is somewhat mistaken. So I have 5 OSGi JVM's in my cluster, and I change the config on one of them, magically the ManagedServices notice the change and reconfigure, but what about the other nodes in the cluster that now have a different configuration ?

And then there is the use case where we have configuration information that really shouldn't be changed when a bundle is active. A database connection. Change that mid stream, who knows what will happen.

At the moment, unless anyone reading this can tell me how to use the configuration service where bundles expose multiple services, constructed by IoC, I feel its going to be simpler to create a ManagedService that is a configuration service, and allow that service to communicate throughout the cluster and manage reloading. Its a pity since I had hoped OSGi would manage this for me, perhaps I should have not trusted the hype again, reminds me of a belief in EJB many years ago.
