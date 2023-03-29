---
layout: post
title: 'Spring 2 XML validation errors (cvc-elt.1)'
description: ""
date: Sat Apr 28 2007 12:48:21 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/28/100/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
If you get one of these in Spring 2

> `org.springframework.beans.factory.BeanDefinitionStoreException: Line 5 in XML document from class path resource [applicationContext.xml] is invalid; nested exception is org.xml.sax.SAXParseException: cvc-elt.1: Cannot find the declaration of element 'beans'.`

Then you need to change your applicationContext.xml from

> ```xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"` `xsi:schemaLocation="http://www.springframework.org/schema/beans/spring-beans-2.0.xsd"` `>`

To

> ```xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"` `xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd"` `>`

There may also be problems with local resolution of the xsd, but the Documentation on the web is wrong in a number of places.
