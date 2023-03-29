---
layout: post
title: 'Configuring Logging in Nakamura/Sling, at runtime'
description: ""
date: Fri Mar 12 2010 13:30:17 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/03/12/configuring-logging-in-nakamurasling-at-runtime/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
One of the most frustrating things about trying to find out what is broken in a running application is that the information in the logs is not informative enough, and if it is, there is too much of it to be useful. This is often because the logging configuration has to be set prior to the server starting. So if you have 2 options. Configure the logging at debug level just in case there is a problem, or restart the server when there is a problem. Nether are really practical in production. Debug an everything kills the server, and your definitely in the wrong profession if you can predict where to put debug on (ie the future), you should be a banker.

Fortunately Sling/Felix have a nifty feature, exposed in Sakai Nakamura that allows a sysadmin to reconfigure logging at runtime. If you go to the [Configuration console plugin http://localhost:8080/system/console/configMgr](http://localhost:8080/system/console/configMgr) and find the Configuration factory called "org.apache.sling.commons.log.LogManager.factory.config" you can create a new configuation. In this configuration you can specify a level, target file, and best of all, a package sub path. For instance I just needed to look at the way ACLs were being resolved in Nakamura so I created a configuration logging to _logs/acl.log \_at log level \_Debug_ and used a package name _org.apache.jackrabbit.core.security.authorization.acl_. Now all the ACL activity happening in a class _DynamicACLProvider_ appears in the log file _logs/acl.log_. When I am done, I can delete the configuration. Neat. No server restart, and highly targeted logging with no need to go round to each node in a cluster and configure each one differently. I could probably make it all stream out to syslogd on demand and collect the results from a cluster centrally. So if you are sinking under mountains of log files with useless debug statements that you cant get rid of till next time downtime is scheduled, there is another way.
