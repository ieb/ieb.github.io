---
layout: post
title: 'Running specific Maven Test with JVM Args'
description: ""
date: Fri Sep 21 2007 10:08:41 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/21/running-specific-maven-test-with-jvm-args/
categories: "Apache Maven, hibernate, Surefire, Uncategorized, Unit testing"
hero: ../../../defaultHero.jpg
---
I have some long running tests in search, but I wouldnt want anyone to run them as part of the normal build. The tests dont have the word Test in the classname which prevents them from running, but they can be invoked on the command line with -Dtest=_classname_

```
mvn -Dtest=SearchSoak test
```

Also I have found that its necessary sometimes to add jvm args to the unit test, reconfiguring the Surefire plugin makes this possible, in the pom

```
...
  <properties>
    <deploy.target/>
    <maven.test.jvmargs> </maven.test.jvmargs>
  </properties>
...
<build>
...
 <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
          <forkMode>pertest</forkMode>
          <argLine>${maven.test.jvmargs}</argLine>
        </configuration>
      </plugin>
    </plugins>
...
</build>
```

And then to run with a heap dump and YourKit connection

```
export DYLD_LIBRARY_PATH="$DYLD_LIBRARY_PATH:/Applications/YourKit Java Profiler 6.0.16.app/bin/mac"mvn -Dtest=SearchSoak \
   -Dmaven.test.jvmargs='-XX:+HeapDumpOnOutOfMemoryError -agentlib:yjpagent' \
   test
```
