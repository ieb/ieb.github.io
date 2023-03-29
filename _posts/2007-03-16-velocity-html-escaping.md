---
layout: post
title: 'Velocity HTML Escaping'
description: ""
date: Fri Mar 16 2007 09:40:56 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/16/velocity-html-escaping/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The age old problem often overlooked in the rush to get a UI out of the door.... html escaping. Some view technologies have no support for and you are just left to do it all manually or forget, jsp. Some like RSF just do it without even thinking about it because they are xml based. And some have mechanisms to let you choose.

Velocity has an event mechanism that allows you to escape the output for the target output format. You can either implement a handler and inject it into the context or register one. Standard ones are based on regexes of the variable names in template eg \${model.sqlStatement} could be matched with /sql.\*/ to escape as SQL.

eventhandler.referenceinsertion.class = org.apache.velocity.app.event.implement.EscapeHtmlReference eventhandler.referenceinsertion.class = org.apache.velocity.app.event.implement.EscapeSqlReference eventhandler.escape.html.match = /msg.\*/ eventhandler.escape.sql.match = /sql.\*/

This approach makes the escaping issue simple where the output doesnt conform to xml formatting (eg css, Sherlock, ddl, ASN1 etc), but you have to remember to use some conformaty in the naming of the view model entities... not entirely a bad thing.

http://velocity.apache.org/engine/devel/developer-guide.html
