---
layout: post
title: 'SparseMap Content version 1.4 released.'
description: ""
date: Wed Dec 14 2011 04:39:11 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/12/14/sparsemap-content-version-1-4-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Sparse Map version 1.4 has been tagged ([org.sakaiproject.nakamura.core-1.](https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.3)4) and released. Downloads of the source tree in [Zip](https://github.com/ieb/sparsemapcontent/zipball/org.sakaiproject.nakamura.core-1.4) and [TarGZ](https://github.com/ieb/sparsemapcontent/tarball/org.sakaiproject.nakamura.core-1.4) form are available from GitHub.

In this release 6[ issues](https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=5) were addressed, the details are in the [issue tracker](https://github.com/ieb/sparsemapcontent/issues). The main difference you will notice in this release is the size of the core. The jar has shrunk from over 2MB to just over 200KB. This is due to the introduction of a Service Provider Interface for the raw storage layer. Implementations of the Service Provider Interfaces have been released separately for Derby, [MySQL](http://en.wikipedia.org/wiki/MySQL "MySQL") and [PostgreSQL](http://en.wikipedia.org/wiki/PostgreSQL "PostgreSQL"). Due to the licensing surrounding the Oracle JDBC driver I have not released a binary of the Oracle SPI implementation, however there is a tagged release in the source repository. I have also restrained from releasing the SPI implementations for Cassandra, [HBase](http://en.wikipedia.org/wiki/HBase "HBase") and [MongoDB](http://en.wikipedia.org/wiki/MongoDB "MongoDB") as I am not satisfied the implementations are sufficiently tested or complete.

If you find any issues, please mention them to me or, better still, add an issue to the issue tracker. Unless otherwise stated the license is Apache 2. Thanks to everyone who made this release possible.

```
Tag:  <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.4">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.</a>4
Derby SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.derby-driver-10.6.2.1-1.4">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.derby-driver-10.6.2.1-1.4 </a>PostgreSQL SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.postgres-driver-9.0-801-1.4">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.postgres-driver-9.0-801-1.4 </a>MySQL SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.mysql-driver-5.1.13-1.4">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.mysql-driver-5.1.13-1.4 </a>Oracle SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.oracle-driver-1.4-1.4">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.oracle-driver-1.4-1.4</a> 
Issues Fixed: <a href="https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=5">https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=</a>5
```

To use

```
<dependency>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.core</artifactId>
  <version>1.4</version>    
</dependency>
```

The Jar is an [OSGi](http://en.wikipedia.org/wiki/OSGi "OSGi") bundle complete with Manifest, bundled with services. To use you will need to select a SPI implementation fragment bundle and deploy that with the core bundle. Normally this is done when the OSGi Standalone application jar is constructed. In addition to the core SparseMap bundle you will now need one of the the SPI implementation fragments.

Derby

```
<bundle>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.derby-driver</artifactId>
  <version>10.6.2.1-1.4</version>    
</bundle>
```

PostgreSQL

```
<bundle>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.postgres-driver</artifactId>
  <version>9.0-801-1.4</version>    
</bundle>
```

MySQL

```
<bundle>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.mysql-driver</artifactId>
  <version>5.1.13-1.4</version>    
</bundle>
```
