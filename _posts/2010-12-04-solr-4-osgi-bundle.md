---
layout: post
title: 'Solr 4 OSGi Bundle'
description: ""
date: Sat Dec 04 2010 16:28:55 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/12/04/solr-4-osgi-bundle/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I need a Solr bundle to provide search capabilities to my app, but I want it to work in a cluster, and I have to have near real time search indexing, so using SolrJ4 makes sense. On the Solr 4 road map it looks like a strong probability that it will be possible to configure for Near Real Time Search indexing in Solr based on the capabilities that were introduced into Lucene in version 2.9. So the approach is to create an OSGi bundle based on the 4.0-SNAPSHOT version of Solr, that will operate SolrJ in two modes. Remote for a cluster implementation where one or more Solr servers can provide search capabilities to the cluster, and Embedded where the App server cluster is a cluster of 1. My environment is based on Sling, which is OSGi. In some senses this make life easier as the classloader policies of OSGi allow me to isolate dependencies used by complex components such as Solr. On the other hand OSGi makes life harder since it requires that no cleaver tricks have been played with the underlying classloaders. Solr has a SolrResourceLoader that adds some custom package resolution and classloader structure which by default wont work in OSGi, so here is how to bring up Solr 4 Embedded as an OSGi component. At this point I have to give credit to Josh Holtzman working on the Matterhorn project for his pointer. He did this with Solr 1.3 a long time ago, and was kind enough to give me pointers.

The SolrConfig has a package protected constructor that allows the caller to give it a SolrResourceLoader which can be made to work with OSGi bundle class loader. Being a package protected constructor you will need to create this class in the same package as SolrConfig.

```
package  org.apache.solr.core;

import org.apache.solr.core.SolrConfig;
import org.apache.solr.core.SolrResourceLoader;
import org.xml.sax.SAXException;
import java.io.IOException;
import java.io.InputStream;
import javax.xml.parsers.ParserConfigurationException;

public class NakamuraSolrConfig extends SolrConfig {
 public NakamuraSolrConfig(SolrResourceLoader loader, String name, InputStream is)
      throws ParserConfigurationException, IOException, SAXException {    
    super(loader, name, is);  
 }
}
```

Having exposed the constructor (Solr people are now tut tutting), I can inject a custom SolrLoader with a modified openResource method to ensure we don't fall foul of the OSGi classloader policy. The only part of the SolrLoader I significantly was:

```
@Override
public InputStream openResource(String resource) {
  InputStream in = this.getClass().getClassLoader().getResourceAsStream(resource);
  if ( in == null ) {
    in = super.openResource(resource);
  }
  return in;
}
```

With that all done I can construct an EmbeddedSolrServer

```
NakamuraSolrResourceLoader loader = new NakamuraSolrResourceLoader(solrHome,this.getClass().getClassLoader());
coreContainer = new CoreContainer(loader);
SolrConfig config = new NakamuraSolrConfig(loader, "solrconfig.xml", getStream("solrconfig.xml"));
IndexSchema schema = new IndexSchema(config, null, getStream("schema.xml"));
SolrCore nakamuraCore = new SolrCore("nakamura", coreDir.getAbsolutePath(), config, schema, null);
coreContainer.register("nakamura", nakamuraCore, false);
server = new EmbeddedSolrServer(coreContainer, "nakamura");
```

Obviously I also had to embed the jars I didn't want as bundles and provide those I did, but the process of building the bundle itself is a bit too tedious to mention, and I haven't finished that yet. I suspect I will encounter more problems although with full access to the resource loader I should be able to modify the behaviour appropriately.
