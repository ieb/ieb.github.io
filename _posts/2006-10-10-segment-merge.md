---
layout: post
title: 'Segment Merge'
description: ""
date: Tue Oct 10 2006 11:53:07 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/10/10/segment-merge/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The Segment merge algorithm in search is dumb and needs to be made better. It has a habit of not merging upto the full 2G segment size at the moment and needs to be made better. This has the advantage that we don't ask for massive transfers, but it would be better to be able to ask for a target segment size and actually get it.
