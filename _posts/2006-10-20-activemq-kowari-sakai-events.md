---
layout: post
title: 'ActiveMQ / Kowari / Sakai Events'
description: ""
date: Fri Oct 20 2006 18:29:04 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/10/20/activemq-kowari-sakai-events/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
For some time, I've been thinking about how the Sakai Events which can fill up a production database should be managed. Although of interest in the Sakai database they are not necessarily needed for the smooth running of a Sakai database, and when there are 10 - 20M events present, the event service slows down a little on insert.

So, I've been playing with ActiveMQ and JMS. at https://source.sakaiproject.org/contrib/tfd/trunk/eventserver I've put together a prototype JMS adapter that channels Sakai Events into a local JMS broker, which then, via a bridge propagates the event to a hub Broker. This hub broker of which there would be one or more per Sakai cluster takes the feeds of messages and further distributes them.

One such listener on the Hub might be a JMS to RDF converter that will take the JMS serialization of the Sakai Event convert it into Triples and push it into a Kowari instance.

Another use of the hub could be AJAX based real time monitoring of the event feed for NOC type operations.

A side effect of this loose binding, is that JMS Consumers can exist a loose bound components, and so can use GPL jars without causing problems for the main Sakai code base, but then they cant be distributed as part of Sakai... so its all a bit moot.
