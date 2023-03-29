---
layout: post
title: 'Abstracting Sakai Urls'
description: ""
date: Thu Jun 04 2009 13:07:55 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/06/04/abstracting-sakai-urls/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
For years the Sakai community has suffered with unspeakable URL's. To give educators URL's that they can only communicate in text, and are unable to spread by word of mouth must be a barrier to teaching. As we rewrite Sakai based on Apache Sling I am determined to ensure that a tutor at Cambridge can say, in a busy street, at lunch time to a confused student; "go to camtools quantumwell2008 and look for the lecture notes" with some confidence that the student will enter camtools.cam.ac.uk/quantumwell2008 and find what they need.

Competition for simple urls generates challenges. A land grab to claim base level urls will create a huge number of unique root URL's. However we might like to impose a content model on the participants, the URL's are their space, and any abstraction purely for technical purposes has to be avoided. Why should I ask the tutor to put his content in /2008/physics/tutorials/group54/week12 which is only marginally better than earlier versions of sakai with an unspeakable /portal/site/edf435-edf-a237-bdc12 or something close.

To make the URL's of Sakai usable we have to accept in places there will be millions of potential elements at level in URL space. This leaves us with a technical problem. Put even 1000's of items into a folder in JCR and write performance and concurrency suffer. Experiments show that &lt; 1000 child nodes delivers acceptable performance. This is not unique to JCR, as all hierarchical filing systems exhibit performance limitations with numbers of items per folder at some level, if the folder optimization has been used to speed underlying access. I am not advocating patching Jackrabbit to make it capable of storing millions of items in a folder since doing that will certainly expose other problems.

So we have accepted that we need to support millions of siblings in url space. To achieve this in JCR and maintain scalability we are re-writing the URL space though a filter that hashes the path so that no folder contains more than 255 items. With 4 levels of hashing the theoretical limit becomes somewhere around 4E9 items, assuming the underlying infrastructure can cope with that many items.

After a great deal of experimentation and reading of the Sling code base the implementation solution was embarrassingly simple. Write a servlet that rewrites the URL, resolves the real JCR Sling Resource and re-dispatch that resolved resource back into Sling. In all about 20 lines of code. The only hard part was to patch Sling to allow it to bind non-existent URL's to Servlets. (see <http://codereview.appspot.com/67146>) So we now have a mechanism were we can designate nodes within the content tree to be abstracted in this way creating highly scalable stores of information... simply by setting a property on the node.
