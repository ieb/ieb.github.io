---
layout: post
title: 'Surefire Unit Test arguments in Maven 2'
description: ""
date: Wed Sep 05 2007 23:26:18 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/05/surefire-unit-test-arguments-in-maven-2/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
To make the surefire plugin to maven2 operate in a seperate jvm instance, and have different jvm args (eg more memory, or profiler) you can change the way in which the unit tests are launched.

```
<code class="prettyprint">
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
</code>
```

Then you will need to set \${maven.test.jvmargs} in the properties area to keep maven going.

```
<code class="prettyprint">
<properties>
	<deploy.target/>
	<maven.test.jvmargs></maven.test.jvmargs>
</properties>
</code>
```

and finally to run

```
mvn  -Dtest=SearchSoak -Dmaven.test.jvmargs='-agentlib:yjpagent -Xmx128m' test
```

Some time the maven.junit.jvmargs parameter might appear in maven 2 as it did in maven 1 ?
