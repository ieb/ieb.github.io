---
layout: post
title: 'Programmatic Logging Configuration in OSGi'
description: ""
date: Thu Dec 09 2010 14:33:41 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/12/09/programmatic-logging-configuration-in-osgi/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Although you can configure Logging via configuration files and admin consoles in OSGi, Sling/Felix in this instance, can you do it programatically. First, why would you want to. Well you might have a bundle, embedding a sub component where the logging verbosity is more than you want in the main logs. Obviously you can configure this bundle by adding config files, but thats not so easy if the config is outside the bundle, and you might want to put the logging configuration under the control of bundle itself on activation. In Sling Logging is configured by via a Factory, which you can get hold of via the ConfigurationAdmin service provided by OSGi.

```
Configuration logConfiguration = configurationAdmin.createFactoryConfiguration("org.apache.sling.commons.log.LogManager.factory.config", null);
Dictionary<String, Object> loggingProperties = new Hashtable<String, Object>();
loggingProperties.put("pid", this.getClass().getName());
loggingProperties.put("org.apache.sling.commons.log.level", "INFO");
loggingProperties.put("org.apache.sling.commons.log.file", "logs/solr.log");
loggingProperties.put("org.apache.sling.commons.log.names", "org.apache.solr");
logConfiguration.update(loggingProperties);
```
