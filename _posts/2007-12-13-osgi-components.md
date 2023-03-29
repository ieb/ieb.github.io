---
layout: post
title: 'OSGI Components'
description: ""
date: Thu Dec 13 2007 12:30:55 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/12/13/osgi-components/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Perhapse this is premature, but a quick look around Apache Felix and Spring OSGI (Sorry I should say Spring Modules.... why the name change ?) gives the impression that its not going to be too hard to make most of Sakai OSGI.

So what is needed?

Well we would have to upgrade to Spring 2.5, we would have to write a service definition for each bundle and convert/move the components.xml file into the right places to make them load properly... and then we would have to deal with all the out of band things that go on in Sakai over the classloader boundaries.

IMHO, this would be a more productive long term aim that trying to write our own re-loadable component manager in competition with the component lifecycle that OSGi provides.

I also notice that there is goos support in eclipse for automating the creation of new bundles as eclipse plugins are just OSGi bundles, but for us the more important thig appears to be that Felix and Spring Modules will work with little or no effort inside Tomcat if we use the top level container concepts.
