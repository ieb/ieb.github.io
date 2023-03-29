---
layout: post
title: 'And you thought you had privacy.'
description: ""
date: Wed Mar 21 2007 20:13:57 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/03/21/and-you-thought-you-had-privacy/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Howe do you go about storing large volumes of data persistently in a browser. Cookies are no good because the data gets sent back to the server so it will break most http connections at about 4K. But there are a number of newer mechanisms appearing. IE5+ has had userData ( http://msdn.microsoft.com/workshop/author/behaviors/reference/behaviors/userdata.asp ) for a while, Firefox2 has DOM:Storage from the HTML5 spec (see http://www.whatwg.org/specs/web-apps/current-work/#storage and http://developer.mozilla.org/en/docs/DOM:Storage ) and then there are things like halfnote ( http://aaronboodman.com/halfnote/ ). We appear to moving rapidly to a state where the browser is becoming an offline client, but none of this works for FF1.5, Safari and others.

Then there is Flash which has local storage, where a site can store upto 100K of data on your machine without the user being asked to confirm, it works everywhere flash works and doesn't have any of the drawbacks of cookies. The only problem is the calling interface between Javascript is totally insane. You have 2 options, an asynchronous event queue or writing lash tags with parameters into the DOM.

With a footprint of 1px by 1px and 4K who is going to notice it ?

RWiki will be using this for autosave functionality.
