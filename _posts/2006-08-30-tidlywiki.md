---
layout: post
title: 'TidlyWiki'
description: ""
date: Wed Aug 30 2006 10:33:26 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/30/tidlywiki/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
At first I thought.... not another Wiki.... but then this looks interesting. TidlyWiki is a wiki in an HTML page with the entire wiki engine written in JavaScript. Perfectly possible, JavaScript has good Regex support and all the Wiki engine needs to do is re-write DIV's with the rendered content.

Bill Steel posted onto the Sakai-Dev list about embedding this, which makes a lot of sense. An HTML page in Content Hosting containing the markup and the engine in a static JS file. There are some drawbacks... the engine is 200K of Javascript.... all the wiki is in a single page.... there isn't a mechanism to update the page, other than by a PUT back to the server... but all of those could be overcome. If there was a small amount of backend support, to do things like diffs then for notebook operations this makes sense. Obviously its a really online environment, I'm not certain how you would do a huge wiki, or render the wiki to PDF/RTF in Javascript, or provide full text search.... but an inverted index in Javascript is perfectly possible.
