---
layout: post
title: 'Search Hardware Requirements'
description: ""
date: Tue Oct 10 2006 11:44:14 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/10/10/search-hardware-requirements/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The hardware requirements of search are somewhat undefined.... why? Because we are dealing with a variety of document types with all sorts of content. A 10M PDF might contain only 10K of indexable content, and a 100K email message might contain 99K of indexable content, this makes it difficult to come up with anything precise about the size of the index.

I have recently moved to not storing the digested content in the index to reduce the size of the index. Since the index records are now just offsets into a terms vector the compression is far greater than before.

Sakai search, being based on Lucene is quite similar to Nutch which informed parts of its indexing operation, so perhaps some of the metrics from the Nutch community are valid. They indicate that 100M documents will require 1TB of index space. A single node with 1 search query per second can handle 20M documents, and at 20 search queries per node, the node can handle 2M documents with 4G of ram. They must be thinking of 64 bit architectures. I suspect that this level of performance is an order of magnitude greater than required by Sakai, but if we look at the space requirements we might get 10G per 1M documents. Obviously the mix of documents is different from a typical search engine load. In version upto now, we haven't reached that target, on an earlier version with uncompressed full content in the index we were only getting 50% compression on the original size.... the later trunk code should improve this as I think is has already done for Cape Town.
