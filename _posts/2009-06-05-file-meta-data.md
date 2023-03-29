---
layout: post
title: 'File meta data'
description: ""
date: Fri Jun 05 2009 13:34:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/06/05/file-meta-data/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Digital repositories need metadata associated with content, at the most basic level this can be as simple as properties associated with the file nodes in JCR.

But...

By default files uploaded to Sling cant have properties added to them because the nt:resource node type in the spec only allows a small defined set of properties. Obviously we really want to have properties on files, as all documents have metadata both technical and authoritative. There is a way to make nt:resource (or any other node) have properties and unstructured children, with a mixin.

Here how

First we need to define a definition for the mixin, this is in cnd format, which is loaded into Sling with the standard ContentLoader extension to an OSGi bundle. Here is one I did earlier for Sakai Sites.

```
// Add a mixin that allows nodes to accept other properties, (eg nt:file)
[sakai:propertiesmix] > mix:versionable mixin
 - '*' (undefined)
 copy
 - 'sakai:labels' (string)
 copy
 multiple
 + '*' (nt:unstructured)
```

This says, the mixinType sakai:properties mix allows any property, of an unspecified type to be added and the sakai:labels type to be added as a multiple type. It also allows multiple children of type nt:unstructured.

If you need to create add this capability to any node here is what to do, assuming the SakaiK2 server is on localhost:8080 create a temp folder as admin

```
curl-F"test=test" http://admin:admin@localhost:8080/tmp
```

upload a file called patch file from the local file called SLING-251.patch

```
curl -F"patchfile=@SLING-251.patch" http://admin:admin@localhost:8080/tmp
```

looking at the properties of the node I just created we get.

```
curl http://admin:admin@localhost:8080/tmp.tidy.2.json
{
 "test": "test",
 "jcr:primaryType": "nt:unstructured",
 "patchfile": {
   ":jcr:data": 16062,
   "jcr:primaryType": "nt:resource",
   "jcr:mimeType": "application/octet-stream",
   "jcr:uuid": "24030fa7-6bf2-49ec-b52b-1dfbf1a6a5d9",
   "jcr:lastModified": "Fri Jun 05 2009 13:06:36 GMT+0100"
 }
}
```

Add the sakai:propertiesmix mixin

```
curl -F"jcr:mixinTypes=sakai:propertiesmix" http://admin:admin@localhost:8080/tmp/patchfile
```

looking at the properties of the node I just created again, notice the mixin

```
curl http://admin:admin@localhost:8080/tmp.tidy.2.json
{
 "test": "test",
 "jcr:primaryType": "nt:unstructured",
 "patchfile": {
   "jcr:versionHistory": "cdfeb02d-aeed-4311-be9e-d6a402566f42",
   "jcr:isCheckedOut": true,
   "jcr:baseVersion": "e816ccb9-df4a-4ad1-9772-be2079982131",
   ":jcr:data": 16062,
   "jcr:primaryType": "nt:resource",
<span style="color:#ff0000;">   "jcr:mixinTypes": [
     "sakai:propertiesmix"
   ],</span>
   "jcr:mimeType": "application/octet-stream",
   "jcr:uuid": "24030fa7-6bf2-49ec-b52b-1dfbf1a6a5d9",
   "jcr:predecessors": [
     "e816ccb9-df4a-4ad1-9772-be2079982131"
   ],
   "jcr:lastModified": "Fri Jun 05 2009 13:06:36 GMT+0100"
 }
}
```

Add a new property to the file

```
curl-F"something=else" http://admin:admin@localhost:8080/tmp/patchfile
```

and the result is

```
curl http://admin:admin@localhost:8080/tmp.tidy.2.json
{
 "test": "test",
 "jcr:primaryType": "nt:unstructured",
 "file": {
 "jcr:isCheckedOut": true,
 "jcr:versionHistory": "cdfeb02d-aeed-4311-be9e-d6a402566f42",
 <span style="color:#ff0000;">"something": "else",</span>
 "jcr:baseVersion": "e816ccb9-df4a-4ad1-9772-be2079982131",
 "jcr:mixinTypes": [
 "sakai:propertiesmix"
 ],
 "jcr:primaryType": "nt:resource",
 ":jcr:data": 16062,
 "jcr:uuid": "24030fa7-6bf2-49ec-b52b-1dfbf1a6a5d9",
 "jcr:mimeType": "application/octet-stream",
 "jcr:lastModified": "Fri Jun 05 2009 13:06:36 GMT+0100",
 "jcr:predecessors": [
 "e816ccb9-df4a-4ad1-9772-be2079982131"
 ]
 }
}
```
