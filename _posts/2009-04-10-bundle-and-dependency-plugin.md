---
layout: post
title: 'bundle and dependency plugin'
description: ""
date: Fri Apr 10 2009 13:19:52 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/04/10/bundle-and-dependency-plugin/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I have been experimenting with getting a happy medium in the bundle and dependency plugin with respect to internal dependencies. The bundle plugin analyses the code base and constructs a suitable MANIFEST.MF for the bundle, and the dependency plugin embeds jars into the jar to resolve internal dependencies. Its handling of those jars is interlinked, and confusing when it comes to both dependencies and transitive dependencies. The dependency plugin may pickup your dependencies and copy them into the jar, but unless they are required by the directives in the bundle plugin they wont appear in the final bundle. So here are some settings that appear to work.

For the bundle plugin:

```
    <Embed-Dependency>*;scope=runtime|compile</Embed-Dependency>
          <Embed-Transitive>true</Embed-Transitive>
```

causes all dependencies marked as runtime or complie, and the transitive dependencies from those to be embeded into the bundle, if they were copied there in the first place.

In the dependency plugin:

```
<includeScope>runtime</includeScope>
```

Will cause all runtime and compile scope dependencies to be included in the packaging process to be later filtered by the bundle plugin.

Then elsewhere in the pom dependencies can be marked as compile or runtime appropriately.

You could use explicit definition with includeArtifactIds in the dependency plugin and the same explicit artifactId's in Embed-Dependency statement in the bundle plugin, but that rapidly becomes error prone.
