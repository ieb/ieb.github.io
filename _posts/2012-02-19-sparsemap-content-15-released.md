---
layout: post
title: 'SparseMap Content 1.5 released'
description: ""
date: Sun Feb 19 2012 01:29:14 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/02/19/sparsemap-content-1-5-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Sparse Map version 1.5 has been tagged ([org.sakaiproject.nakamura.core-1.](https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.3)5) and released. Downloads of the source tree in [Zip](https://github.com/ieb/sparsemapcontent/zipball/org.sakaiproject.nakamura.core-1.5) and [TarGZ](https://github.com/ieb/sparsemapcontent/tarball/org.sakaiproject.nakamura.core-1.5) form are available from GitHub.

In this release 14[ issues](https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=6) were addressed, the details are in the [issue tracker](https://github.com/ieb/sparsemapcontent/issues). This release contains critical fixes to the 1.3 and 1.3 release that make those releases unusable except for the smallest deployments. As with precious releases the SPI bundles for Derby and PostgresSQL have been released, however MySQL and Oracle SPI implementations have not been released in binary forms due to the licenses on the JDBC Drivers for those databases. There are tags in the source repositories for these releases. Again, I have also restrained from releasing the SPI implementations for Cassandra, [HBase](http://en.wikipedia.org/wiki/HBase "HBase") and [MongoDB](http://en.wikipedia.org/wiki/MongoDB "MongoDB") as I am not satisfied the implementations are sufficiently tested or complete.

If you find any issues, please mention them to me or, better still, add an issue to the issue tracker. Unless otherwise stated the license is Apache 2. Thanks to everyone who made this release possible.

```
Tag:  <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.5">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.</a>5
Derby SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.derby-driver-10.6.2.1-1.5">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.derby-driver-10.6.2.1-1.5 </a>PostgreSQL SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.postgres-driver-9.0-801-1.5">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.postgres-driver-9.0-801-1.5 </a>MySQL SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.mysql-driver-5.1.13-1.5">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.mysql-driver-5.1.13-1.5 </a>Oracle SPI Tag: <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.oracle-driver-1.4-1.5">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.oracle-driver-1.4-1.5</a> 
Issues Fixed: <a href="https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=6">https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=</a>6
```

To use

```
<dependency>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.core</artifactId>
  <version>1.5</version>    
</dependency>
```

The Jar is an [OSGi](http://en.wikipedia.org/wiki/OSGi "OSGi") bundle complete with Manifest, bundled with services. To use you will need to select a SPI implementation fragment bundle and deploy that with the core bundle. Normally this is done when the OSGi Standalone application jar is constructed. In addition to the core SparseMap bundle you will now need one of the the SPI implementation fragments.

Derby

```
<bundle>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.derby-driver</artifactId>
  <version>10.6.2.1-1.5</version>    
</bundle>
```

PostgreSQL

```
<bundle>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.postgres-driver</artifactId>
  <version>9.0-801-1.5</version>    
</bundle>
```

MySQL, Oracle

Please check out the source code at the appropriate tag and build locally.
