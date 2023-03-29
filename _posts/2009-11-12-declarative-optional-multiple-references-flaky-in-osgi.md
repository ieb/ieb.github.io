---
layout: post
title: 'Declarative optional multiple references flaky in OSGi'
description: ""
date: Thu Nov 12 2009 16:57:56 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/11/12/declarative-optional-multiple-references-flaky-in-osgi/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
It looks like binding multiple optional references in OSGi is flaky at least with Felix 1.2.0. Uhh what does that mean?

AFAICT, an annotation like

```
@Reference(name="virtualResourceType",
 cardinality = ReferenceCardinality.OPTIONAL_MULTIPLE,
 referenceInterface = VirtualResourceType.class)
```

with

```
public void bindVirtualResourceType(VirtualResourceType virtualResourceType) {
    log.info("Bound "+virtualResourceType);
   store.put(virtualResourceType,virtualResourceType);
}
public void unbindVirtualResourceType(VirtualResourceType virtualResourceType) {
   log.info("UnBound "+virtualResourceType);
   store.remove(virtualResourceType);
}
```

Only binds some of the time on reload, but unbind works every time.

I have a feeling that below will work, no idea why ?

```
protected void bindVirtualResourceType(ServiceReference reference) {
   VirtualResourceType virtualResourceType =  (VirtualResourceType) this.componentContext.locateService(
       "VirtualResourceType", reference);
   if ( virtualResourceType != null ) {
      LOGGER.info("=====================BOUND VIRTUAL RESOURCE TYPE{}===============================",virtualResourceType.getResourceType());
      virtualResourceTypes.put(virtualResourceType.getResourceType(), virtualResourceType);
   } else {
      LOGGER.info("=====================Faied to find BOUND VIRTUAL RESOURCE TYPE{}===============================",reference);
   }
}
```

## Update:

The annotation should have been

@Reference(name = "virtualResourceType", cardinality = ReferenceCardinality.OPTIONAL_MULTIPLE, referenceInterface = VirtualResourceType.class, **policy = ReferencePolicy.DYNAMIC**)

and then the bind and unbind can be

```
protected void bindVirtualResourceType(VirtualResourceType virtualResourceType) {
    virtualResourceTypes.put(virtualResourceType.getResourceType(), virtualResourceType);
}

protected void unbindVirtualResourceType(VirtualResourceType virtualResourceType) {
    virtualResourceTypes.remove(virtualResourceType.getResourceType());
}
```

(I am an idiot!)
