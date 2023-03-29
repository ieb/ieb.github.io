---
layout: post
title: 'Sparse Map Content 1.2 Released'
description: ""
date: Thu Oct 27 2011 08:08:43 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/10/27/sparse-map-1-2-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Sparse Map version 1.2 has been tagged ([org.sakaiproject.nakamura.core-1.2](https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.2)) and released. Downloads of the source tree in [Zip](https://github.com/ieb/sparsemapcontent/zipball/org.sakaiproject.nakamura.core-1.2) and [TarGZ](https://github.com/ieb/sparsemapcontent/tarball/org.sakaiproject.nakamura.core-1.2) form are available from GitHub.

In this release [9 issues](https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=3) were addressed, the details are in the [issue tracker](https://github.com/ieb/sparsemapcontent/issues). Notable contributions include a MondoDB driver from Erik Froese which missed the 1.1 release a month ago. After the last release it was suggested that the artfacts make it into a central place, and so all artifacts (binary, source and javadoc) have been signed and pushed up to the central repo. If you find any issues, please mention them to me or, better still, add an issue to the issue tracker. Unless otherwise stated the license is Apache 2. Thanks to everyone who made this release possible.

```
Tag:  <a href="https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.2">https://github.com/ieb/sparsemapcontent/tree/org.sakaiproject.nakamura.core-1.2</a>
Issues Fixed: <a href="https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=3">https://github.com/ieb/sparsemapcontent/issues?sort=created&direction=desc&state=closed&page=1&milestone=3</a>
```

To use

```
<dependency>
  <groupId>org.sakaiproject.nakamura</groupId>
  <artifactId>org.sakaiproject.nakamura.core</artifactId>
  <version>1.2</version>    
</dependency>
```

The Jar is an OSGi bundle complete with Manifest, bundled dependencies and services, ready for use in Apache Felix.
