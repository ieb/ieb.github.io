---
layout: post
title: 'Inverted Index Scalability'
description: ""
date: Thu Jun 04 2009 13:23:03 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/06/04/inverted-index-scalability/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Search mechanism based on inverted indexes work, because the number of terms in the search space is considerably smaller than the search space itself, otherwise, why would you bother to invert. So most search engines work well on languages. The human brain is quite capable of learning a controlled vocabulary that enables it to communicate concepts with other humans. Like a search engine it would suffer learning a single token to every piece of knowledge that ever existed. Communication would be highly efficient, but rather boring; single words followed by long and contemplative periods of thought.

As we tag content with identifiers that have no meaning other than to represent some metadata about those terms we risk expending the vocabulary by which we communicate that knowledge to an extent where it becomes incommunicable. So a search index, that indexes metadata to enable precise re-location and search will eventually fail as the controlled vocabulary of the terms within the inverted index grows beyond the search space itself. I am certain without careful consideration the index-able content and metadata in a Jackrabbit based system, we stress the scalability of the Lucene based search index, billions of properties all with unique terms ?
