---
layout: post
title: 'Bundle Dependencies'
description: ""
date: Wed Apr 15 2009 10:52:12 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/04/15/bundle-dependencies/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Having spent a lot of time resolving bundle dependencies over the last two weeks here are some of the thing that I have learnt.

1\. Use the BND tool and the maven bundle plugin to build the maifest, doing it by hand except for the simplest bundle is hard.

2\. Dont assume that every package needs to be imported. Things like commons-logging have 10's of optional packages that you are probably never going to use. To filter these you can remove them with (maven-bundle-plugin)

```
<Import-Package>
!org.apache.avalon.*,
*
</Import-Package>
```

But remember to put the excludes (!) before the global include (\*).

3\. You never know how an OSGi container might be configured so don't assume that everything jre comes from the boot classloader, it may come from a Framework bundle. You can use the _resolution:=optional_ statement to ensure this is handled. Remember if its not imported into a bundle, then it wont be loaded.

```
<Import-Package>
!org.apache.avalon.*,
*,
org.xml.sax;resolution:=optional
</Import-Package>
```

4\. If you are feeling really lazy and want the bundle to load but generate ClassNotFoundExceptions later then just use _\*;resolution:=optional_ on all imports.

5\. NoClassDefinitionError means that something the class depends on was not imported into the package, but it is exported by annother bundle. Bundles are private parties, _"If your not on the list your not comming in!"_ import == the list.

6\. Package locally. If you have a jar that is private to the bundle and unlikely to be of use to anyone else, package it locally inside the bundle with _&lt;Embed-Dependency>_, just because you can create a bundle, doesn't mean you should.

7\. Don't assume that the OSGi framework is telling you the truth. Often a bundle will report an error like the NoClassDefinitionError. That bundle may not be at fault, look carefully at the stack trace to determine the class where the error happened, and then think carefully which classloader and hence bundle was in use when the error happened.

8\. Dont assume that if you are having classloader problems or resolution problems that you can reload bundles. I have found the reloading bundles only works reliably when there are no classloader or resolution problems. When there are, its anyones guess what state the OSGi container is left in. I have been sutting down, and completely deleiting all state as the only reliable way of debuging dependencies, YMMV.... enjoy:)
