---
layout: post
title: 'Semantic Search'
description: ""
date: Sun Jun 04 2006 09:29:47 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/04/semantic-search/
categories: "Search, Thought"
hero: ../../../defaultHero.jpg
---
Currently Search performs its indexing on text streams. There is a significant amount of information that can be extracted from entities, beside the simple digest of content. This includes things like the entity reference, the URL, title, description etc. There is also other information. We could create multiple indexes for this in Lucene quite easily, but it would not necessarily provide the search structure that is required. A better approach is probably going to be to represent this in RDF. So Im going to try and enhance the EntityContentProcuder with an RDF stream and place a pluggable RDF triple store underneath the search engine to operate as a secondary stream. Its quite possible that this will solve some of the search clustering problems and will certainly address the results clustering that would begin to make search really cool.
