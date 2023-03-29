---
layout: post
title: 'OSGi and Snapshot versions.'
description: ""
date: Tue Jun 09 2009 10:42:24 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/06/09/osgi-and-snapshot-versions/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
If you call your versions 1.2.0-SNAPSHOT and reference them as such in a manifest file, they wont load in OSGi, or at least with Felix, as the versions are expected to be numbers, parsed on . In the Manifest the version must be parsable, 1.2.0.SNAPSHOT, which looks a bit odd, but works. It looks like the bnd tool does this for you.
