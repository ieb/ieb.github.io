---
layout: post
title: 'Loading from OSGi Framework bundles'
description: ""
date: Fri Apr 10 2009 12:40:24 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/04/10/loading-from-osgi-framework-bundles/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
There are some really confusing things about the Class resolution in OSGi, that to the uninitiated like myself of 4 days ago appear like complete black magic. First off, there are 9 rules to OSGi class resolution to confuse you, if you were not already confused enough by classloading, but since I have struggled for 4 days, I thought I might share one solution.

java.lang.NoClassDefFoundError: org.xml.sax.SAXException

org.xml.sax.SAXException is exported from the Framework bundle (normally), so your bundle should be able to find it... actually it can, the NoClassDefFoundError unlike the ClassNotFoundException means it has been found but it cant be loaded. Why ever not ?

Normally this is because a component of the class in question is not available, like a static property for instance. SAXException turns out to be a good example, it has no static properties other than one long, and there is nothing outside java.lang. So there is no reason why it should generate a NoClassDefFoundError when its not generating a ClassNotFoundException.

It turns out the OSGi class search policy is blocking loading it. For any class from any package other java.\* to be loaded from another bundle is \*must\* be imported. Although re-reading the 9 policies in the spec, I can see anything jumping out at me that states that.

Normally the maven bundle plugin would analyse all your classes and add an import, but if a bundled library contains a reference to a system class this will not be included in the import. So, and this is my theory, the class can be found (hence no ClassNotFoundException) but cant be loaded because its 'helpfully' (ho,ho,ho) blocked by the OSGi classloader search policy.

To fix this you must add explicit imports for the unknown classes that your third party libraries will load. eg

```
 <Import-Package>sun.io;resolution:=optional,
            javax.xml.parsers,
            org.w3c.dom,
            org.xml.sax,
            org.xml.sax.ext,
            org.xml.sax.helpers,
            *
            </Import-Package>
```

And then the bundle will have access to the classes exported from the Framework classloader.

All of what I have said above could be completely wrong, my next problem is org.w3c.dom.xpath not in the Framework bundle, but in xml-apis 1.3.04, incidentally along with the rest of the xml apis that I just imported from the framework.

To me this all sounds extremely dangerous, taking some classes from one jar and some from the JVM that are also in the jar, but then I am a novice. I will post more as I discover it, partially because Google didn't help me find a solution to this.

Update:

xml-apis is now bundles as a jaxp-api bundle all on its own so it provides the Non Framework parts of org.w3c and org.xml.

I have also found it necessary to bundle jsr-173 (javax.xml.stream) from xmlbeans as a seperate bundle.

But I am still getting the same NoClassDefFoundError errors, now traced back to the EclipseLink provided bundle containing the PersistenceProvider. You have to work out which bundle the class that caused the error came from, not the reported bundle in the stack trace, barking up wrong tree, yet again.

Update2:

You have to be really carefull, the NoClassDefError hapens when the class is being loaded by the classloader. If it depends on Framework classes, they must be listed in the import otherwise they will not get loaded. So you have to find the class thats failing to be instansiated, and then work out which bundle it came from before adding it to the list of imports. The BND tool should do this, but it cant dig into every possibility in a 3rd party library so it wont. Its quite a long winded process to get it right.
