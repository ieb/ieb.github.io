---
layout: post
title: 'Javascript Templates'
description: ""
date: Fri Feb 22 2008 12:30:56 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/02/22/javascript-templates/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
There are 2 main ways of generating markup from within javascript. Either you perform DOM manipulation, as string injection or direct DOM manipulation. Or you can use templates.

For the java developer, DOM manipulation and string injection is rather like hard coding strings into you java code. templates are more like using jsp, velocity or freemarker.

So I started to look at writing a multi file upload that gave progress feedback, and rapidly found that many of the off the shelf components that did this, didn't expose the markup, so I had to accept the results as they were, or as I could manipulate them with css. If the markup was wrong, I had to dig deep, sometimes very, into the javascript code.

Then I found TrimPath <http://code.google.com/p/trimpath/wiki/JavaScriptTemplates> , on Google Code. A templating language for Javascript. It looks a bit like Smarty templating from PHP and has some similarities to Velocity. It works by processing a template, either as a string or as a element from the HTML DOM and merging it with a Tree of javascript objects, just like Smarty and Velocity do.

The result is all the markup is now in the html page, and so can be designed and edited. You can see the results by looking at the code at <https://saffron.caret.cam.ac.uk/svn/projects/MyCamToolsAlpha/trunk/files/widgets/DropBox/index2.html>

This actually runs from SVN, although some versions of FireFox don't recognize the CSS files as apache isn't configured quite right.... Oh... and its trunk, so its going to change as I work on it. (no need to deploy any more, just run Sakai direct from SVN :) )
