---
layout: post
title: 'Faster Lighter Serialization.'
description: ""
date: Fri Sep 07 2007 23:25:56 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/07/faster-lighter-serialization/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I have been having a long hard look at the serialization of data to storage in Sakai. Back in 2.4 I noticed while testing Content Hosting DAV for search that there was quite a lot of GC activity. A bit of profling (with YourKit, thanks for the OS license :) ) showed that about 400 > 500 MB was going through the GC per upload in big worksite due to quota caluclations. This isnt quite as bad as it sounds since objects going through the heap quickly dont cost anything. However, this is not good.

So in 2.4 we put a caching fix that would mean that this would only happen once every ten minutes of upload activity. But this made me think about what was going wrong. Once again YourKit showed that the DOM parser was at fault.

A bit of free memory calculation around the serializer and parser parts of the route to and from the database shows that each entity is taking 2-3ms and consuming 300-400KB of heap, hence site with 1000 resources consumes 400MB.

When Cocoon 1 came out it was slow. It used DOM. Cocoon 2 came out with SAX and was much faster. So step 1, convert to a SAX parser for reading the entities. This dropped the parse time to about 1ms and the heap requirements down to 40K. An Ok speedup, but I have a gut feeling that this is still too slow. Writng the block, still using a DOM costed 4ms and 70K.

So yesterday, I started to write a serializing infrastructure that would not use XML, but would parse into a binary format. The early unit tests were showing that a parser and seriaiser based on DataOutputStream and DataInputStream under load was taking about 0.000020ms per entity with a 35 byte overhead per entity. By overhead, I mean the extra memory required for parsing, and not the memory required for the input data or output data. My methodology was probably flawed although these results looked like it was worth persuing.

So with the above parser the a large DAV upload, which hammers CHS generated the following metrics for serialize and parse, Parse, ie read the data from the database into an entity object, 62us-70us for parse to entity requiring about 4K per entity. Serialize 49us and 6K.

```
NFO: Average direct Parse now 0.06278688524590163ms 4706.255300546448 bytes (2007-09-07 22:59:54,014 http-8080-Processor23_org.sakaiproject.util.BaseDbSingleStorage)
INFO: Average direct Parse now 0.07424657534246576ms 4538.613698630137 bytes (2007-09-07 22:59:54,487 http-8080-Processor23_org.sakaiproject.util.BaseDbSingleStorage)
INFO: Average Serialization now 0.049322033898305084ms 6768.359322033898 bytes (2007-09-07 22:59:54,787 http-8080-Processor23_org.sakaiproject.util.BaseDbSingleStorage)
INFO: Average direct Parse now 0.06304347826086956ms 4680.677826086957 bytes (2007-09-07 22:59:56,718 http-8080-Processor23_org.sakaiproject.util.BaseDbSingleStorage)
INFO: Average direct Parse now 0.07405405405405406ms 4757.4648648648645 bytes (2007-09-07 22:59:59,191 http-8080-Processor22_org.sakaiproject.util.BaseDbSingleStorage)
```

The modifications can read either XML or the binary format, and can be configured to write either XML or binary. Obviously if you write XML then you loose all the advantages. The data is still stored in the same CLOB database columns, but it just looks different, as below.

`CHSBRE ^/group/7f33526e-446f-4fca-80f6-f9dc0b48b7a1/caret/darwinfiles/caret-files/vol14/set/v14jun.amp )org.sakaiproject.content.types.fileUpload inherited ???????????????? d e DAV:creationdate 20070907215527865 e CHEF:is-collection false e DAV:getlastmodified 20070907215527866 e DAV:getcontenttype application/octet-stream e DAV:getcontentlength 103371 e DAV:displayname v14jun.amp e CHEF:copyright >copyright (c) 2007, Sakai Administrator. All Rights Reserved. e CHEF:creator admin e CHEF:modifiedby admin application/octet-stream ?? 1/2007/250/21/2932b7bf-e41f-478b-00c7-d30f298a58d3`

Disadvantages ? Well the format of serialization is not XML, Srings are still readable, but you probably need the serialization classes to make real use of it. I have structured these so they can roun outside Sakia.
