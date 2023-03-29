---
layout: post
title: 'Sling Runtime Logging Config'
description: ""
date: Tue Nov 10 2009 18:10:01 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/11/10/sling-runtime-logging-config/
categories: "Uncategorized"
hero: ./img/2009-11-picture-6.png
---
One of the most annoying things about bug hunting in open source, is that you can see that the developer left log.debug( statements for you in the code but you have to shutdown, reconfigure logging and restart. In Apache Sling this isnt the case. According to the documentation at <http://sling.apache.org/site/logging.html> you can configure logging at **runtime**. AND you can configure it on a class by class basis. Here are some screenshots of how.

Go to the admin console, select the configuration tab.

![Picture 6](/img/2009-11-picture-6.png "Picture 6")

Select from the Configuration Factories drop down the logging.config Factory,

![Picture 7](/img/2009-11-picture-7.png "Picture 7")

Set the properties including the package or class that you want this logging config to apply to, and save.

![Picture 8](/img/2009-11-picture-8.png "Picture 8")

As I mentioned, you can do all of this on a running instance, no need to shutdown.
