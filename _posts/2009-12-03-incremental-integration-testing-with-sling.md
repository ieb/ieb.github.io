---
layout: post
title: 'Incremental Integration testing with Sling'
description: ""
date: Thu Dec 03 2009 17:19:39 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/12/03/incremental-integration-testing-with-sling/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I keep on forgetting how to do this.

```
cd launchpad/testing
mvn clean install
mvn jetty:run 1> run.log 2>&1 &
# wait for startup to finish
mvn test -Dtest=**/integrationtest/**/*Test.java
```

you can leave the server running, redeploy bundles and re-run specific tests avoiding a full rebuild.
