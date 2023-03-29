---
layout: post
title: 'Maven 1 XML  and DOM Serialization in JDK 1.5'
description: ""
date: Thu Apr 12 2007 01:22:55 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/12/maven-1-xml-and-dom-serialization-in-jdk-15/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
To serialise DOM in JAXP avoiding dependencies on Xerces there are 2 options. This is JDK 1.5 code and later, prior to that you can just use Xerces

1\. Use an identity transform, eg `TransformerFactory fact = TransformerFactory.newInstance(); Transformer idTransform = fact.newTransformer(); Source input = new DOMSource(document); Result output = new StreamResult(System.out); idTransform.transform(input, output);`

or 2. use DOM Level 3 Load and Store eg

`OutputStream out = new FileOutputStream(fileName); DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance(); DocumentBuilder builder = factory.newDocumentBuilder(); DOMImplementation impl = builder.getDOMImplementation(); DOMImplementationLS feature = (DOMImplementationLS) impl.getFeature("LS","3.0"); LSSerializer serializer = feature.createLSSerializer(); LSOutput output = feature.createLSOutput(); output.setByteStream(out); output.setEncoding("UTF-8"); serializer.write(doc, output);`

However when you try to build this 2 with maven 1, it wont since maven1 pulls xerces 2.4.0 into the root classpath... which is somewhere arround JDK 1.2.

The solution, maven.compile.fork=true

in project.properties of the project where you need to build, the compiler forks and uses the JVM classpath without all the Maven 1 jars. Thanks to Josh Holtzman for finding this.

Incedently, the DOMImplementationRegistry appears to be empty in JDK5 with no impls at all.

The first method needs namespace support, so will fail to serialize if the namespace is not found.
