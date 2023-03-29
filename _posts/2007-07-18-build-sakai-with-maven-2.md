---
layout: post
title: 'Build Sakai with Maven 2'
description: ""
date: Wed Jul 18 2007 22:55:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/07/18/build-sakai-with-maven-2/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Maven 2 is upon us... so here is a quick refresh.

1\. Install maven 2.0.6 or later by unziping/untaring the binary download from maven.apache.org

2\. Get the mvn command onto the path (in the bin directory of the binary package)

3\. cd to sakai source

4\. type

```
export MAVEN_OPTS='-Xms256m -Xmx512m -XX:PermSize=64m -XX:MaxPermSize=128m'

mvn clean  #to clean the build

mvn install #to build and install in the local repository

mvn -Dmaven.tomcat.home=/Users/ieb/mytomcat sakai:deploy
#to deploy to mytomcat
```

Thats it.... no configuration required, its all in the build itself.

Some more usage

```
mvn -Dmaven.test.skip=true \
                   -Dmaven.tomcat.home=/Users/ieb/mytomcat \
                   clean install sakai:deploy
```

To clean, install and deploy skipping tests.

If you have already done a build and know that everything has been fetched from remote repositories, you can add the -o switch to go offline.
