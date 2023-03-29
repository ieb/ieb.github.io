---
layout: post
title: 'HowTo: Quickly resolve what an Sling/OSGi bundle needs.'
description: ""
date: Tue Oct 30 2012 06:52:54 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/10/30/howto-quickly-resolve-what-an-slingosgi-bundle-needs/
categories: "Apache Maven, BND, Build Management, Java Classloader, osgi, Programming, Uncategorized"
hero: ../../../defaultHero.jpg
---
Resolving [dependencies](http://en.wikipedia.org/wiki/Dependent_territory "Dependent territory") for an [OSGi](http://en.wikipedia.org/wiki/OSGi "OSGi") bundle can be hard at times, especially if working with legacy code. The sure-fire way of finding all the dependencies is to spin the bundle up in an OSGi container, but that requires building the bundle and deploying it. Here is a quick way of doing it with maven, that may at first sound odd.

If your building your bundle with maven, you will be using the BND tool via the maven-bundle-plugin. This analyses all the byte code that is going into the bundle to work out what will cross over the class-loader boundary. BND via the maven-bundle-plugin has a default import rule of '\*'. ie import everything. If you are trying to control which dependencies are embedded, which are ignored and which are imported, this can be a hinderance. Strange though it sounds, if you remove it life will be easier. BND will immediately report everything that it needs to import that can't be imported. It will refuse to build which is a lot faster than generating a build that won't deploy. The way BND reports is also useful. It tells you exactly what it can't find and this gives you a list of packages to import, ignore or embed. Once you think you have your list of package imports down to a set that you expect to come from other bundles in your container, turn the '\*' import back on and away you go.

In maven that means editing the pom.xml eg:

```
...
 <plugin>
   <groupId>org.apache.felix</groupId>
   <artifactId>maven-bundle-plugin</artifactId>
   <version>2.3.6</version>
   <extensions>true</extensions>
   <configuration>
     <instructions>
       <Import-Package>
         <!-- add ignore packages before the * as required eg. !org.testng.annotations, -->
         * <!-- comment the * out to cause BND to report everything its not been told to import -->
       </Import-Package>
       <Private-Package>
         <!-- add packages that you want to appear as raw classes in the jar as private packages Note, they dont have to source code in the project, they can be anywhere on the classpath for the project, but be careful about resources eg org.apache.sling.commons.cache.infinispan.* -->
       </Private-Package>
       <DynamicImport-Package>sun.misc.*</DynamicImport-Package>
       true</Embed-Transitive>

           <!-- embed dependencies (by artifact ID, including transitives if Embed-Transitive is true) that you dont want exposed to OSGi -->
       </Embed-Dependency>
     </instructions>
   </configuration>
 </plugin>
```

The OSGi purists will tell us that it's heresy to embed anything but sometimes with legacy systems it's just too painful to deal with the classloader issues.

There is probably a better way of doing this, if so, do tell.

```

```
