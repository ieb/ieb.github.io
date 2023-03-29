---
layout: post
title: 'SparseMap Content 1.1 Released'
description: ""
date: Wed Sep 28 2011 00:46:07 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/09/27/sparsemap-content-1-1-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
SparseMap Content 1.1 has been tagged released and pushed to the maven repo. Details of the issues that have been fixed are at <https://github.com/ieb/sparsemapcontent/issues?milestone=2&state=closed>. This release includes a Lock Manager and a migration framework. Thanks to Chris Tweney at University of California, Berkley for his input on the migration framework and apologies to those that have submitted patches that didn't get into this release, notably a MongoDB driver from Erik Froese. The tag contains support for webdav and a number of other extensions although there hasn't been a formal release of these bundles yet.

Release Tag: <https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.1>

Maven Repo: <http://www2.caret.cam.ac.uk/maven2/>

Maven Dependency:

```
<dependency>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.core</artifactId>
  <version>1.1</version>    
</dependency>
....
 <repositories>
    <repository>
      <id>caret-releases</id>
      <name>Caret Releases</name>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
      <url>http://www2.caret.cam.ac.uk/maven2/</url>
    </repository>
 </repositories>
```
