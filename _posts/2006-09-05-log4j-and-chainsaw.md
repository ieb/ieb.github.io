---
layout: post
title: 'Log4J and Chainsaw'
description: ""
date: Tue Sep 05 2006 13:15:34 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/05/log4j-and-chainsaw/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
After years of using tail -f or less on log4j log files, and then trying to do cleaver things in XL with the output, I realize there is this thing called Chainsaw, which accepts a feed of Log4j over IP.

So you can turn off most of the output in the log files and use Chansaw to drill into the log stats, turning on and off DEBUG on selected classes at runtime.

As with all log4j its a pain to setup. Im using a Simple Receiver on port 4445 and so my log4.properties file looks like this:

log4j.rootLogger=INFO, stdout, Chainsaw

log4j.appender.stdout=org.apache.log4j.ConsoleAppender log4j.appender.stdout.layout=org.apache.log4j.PatternLayout log4j.appender.stdout.layout.ConversionPattern=%d{hh:mm:ss.SSS} %-5p\[%-20c] %m%n log4j.appender.stdout.Threshold=WARN

log4j.appender.Chainsaw=org.apache.log4j.net.SocketAppender log4j.appender.Chainsaw.remoteHost=localhost log4j.appender.Chainsaw.port=4445 log4j.appender.Chainsaw.locationInfo=true

log4j.logger.org.sakaiproject=WARN log4j.logger.org.sakaiproject.content=DEBUG log4j.logger.org.sakaiproject.dav=DEBUG log4j.logger.org.apache=ERROR log4j.logger.org.springframework=ERROR log4j.logger.org.hibernate=ERROR log4j.logger.vm.none=FATAL log4j.logger.com.sun.faces=FATAL

The trick is the Threshold setting to reduce the level in the stdout.

If I drop this into the webapps/dav/WEB-INF/classes/log4j.properties it gets loaded in the base loader and changes the whole of Sakai.
