---
layout: post
title: 'Vectors ... read the small print'
description: ""
date: Fri Nov 16 2007 13:38:24 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/11/16/vectors-read-the-small-print/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Well I thought Vectors were synchronized. The Object is, but Iterators are not.

From the Java Doc

" The Iterators returned by Vector's iterator and listIterator methods are fail-fast: if the Vector is structurally modified at any time after the Iterator is created, in any way except through the Iterator's own remove or add methods, the Iterator will throw a ConcurrentModificationException. Thus, in the face of concurrent modification, the Iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future. The Enumerations returned by Vector's elements method are not fail-fast. "

Hence, create an iterator on a vector and you will get a ConcurrentModificationException on the iterator if the vector is modified, even though the Vector itself is Synchronized.
