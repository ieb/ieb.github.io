---
layout: post
title: 'Scaling streaming from a threaded app server'
description: ""
date: Thu Jan 03 2013 07:43:44 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2013/01/03/scaling-streaming-from-a-threaded-app-server/
categories: "Apache, Apache HTTP Server, Application server, DSpace, Uncategorized"
hero: ../../../defaultHero.jpg
---
One of the criticisms that is often leveled against threaded servers where a thread or process is bound to a request for the lifetime of that request, is that they don't scale when presented with a classical web scalability problem. In many applications the criticism is justified, not because the architecture is at fault, but often because some fundamental rules of implementation have been broken. Threaded servers are good at serving requests, where the application thread has to be bound to the request for the shortest possible time, and while it is bound, no IO waits are encountered. If that rule is adhered to, then some necessities of reliable web applications are relatively trivial to achieve and the server will be capable of delivering throughput that saturates all the resources of the hardware. Unfortunately, all to often application developer often break that rule and think the only solution has to be to use a much more complex environment that requires event based programming to interleave the IO wait states of thousands of in progress requests. In the process they dispose of transactions, since the storage system they were using (a RDBMS) can't possibly manage several hundred thousand in progress transactions even if there was sufficient memory on the app server to manage the resources associated with each request to transaction mapping.... unless they have an infinite hardware budget and there was no such thing as physics.

A typical situation where this happens is where large files are streamed to users over slow connections. The typical web application implementation spins up a thread, that performs some queries to validate ACLs on the item, perhaps via SQL or via some in memory structured. Once the request if validated that thread, with all its baggage and resources laboriously copies blocks of bytes out to the client while keeping the thread associated with the request. The request to thread association is essentially long lived. If the connector managing the http connection knows about keep alives, it might release the thread to connection association at the end of the response, but it can't do that until the response is complete. So a typical application serving large files to users will rapidly run out of spare threads giving threaded servers a bad name. That's bad in so many ways. Trickled responses can't be cached, so they have to be regenerated every time. The application runs like a dog, because a tiny part of its behaviour is always a resource hog. Anyone deploying in production will find simple DOS's are easy to execute by just holding down the refresh button on a browser.

It doesn't have to be like that. The time taken for the application to process the request and send the very first byte should be no greater than any other request processed by the application. Most Java based applications can get that response time below 10ms and responses below 1ms are no to hard on modern hardware with a well structured application. To do this with a streamed body is relatively simple. Validate the request, generate a response header in the threaded application server that instructs the connector handling the front end http connection to deliver content from an internal location. Commit the response with no body, and detach the thread servicing the request from the request freeing it to service the next request. Since if implemented efficiently, there were hardly any IO waits involved in that operation, the potential for a thread or CPU core to do other processing while waiting for IO is reduced.

If the bitstream to be send is stored as a file, then you can use X-Sendfile originating LiteHttpd, with close implementations in Apache Httpd ([mod_xsendfile](https://tn123.org/mod_xsendfile/)), nginx ( [X-Accel-Redirect](http://wiki.nginx.org/XSendfile)). If the file is stored at a remote httpd location then some other delivery mechanism can be used. Obviously the http connector (any of the above) should be configured to handle a long lived connection delivering bytes slowly.

In the blog post prior to this I mentioned that [DSpace](http://www.dspace.org/ "DSpace") 3 could be made to serve public content via a cache exposing literally thousands of assets to slow download. I am using this approach to ensure that the back end DSpace server does not get involved with streaming content which might small PDFs but could just as well be multi GB video files or research datasets. The assets in DSpace have been stored on a mountable file system allowing a front end http server to deliver the content without reference to the application server. I have used the following snippets to set and commit the response headers after ACLs have been processed. I also deliver such content have a HMAC secured redirect to ensure that user submitted content into the Digital Repository can't maliciously steal administrative sessions. Generation of HMAC secured redirect takes in the region of 50ms during which time resources are dedicated. If the target is public, the redirect pointer may be cached. Conversion of HMAC secured redirect into X-Sendfile header takes in the region of 1ms with no requirement for database access. Serving the bitstream itself introduces IO waits, but the redirects cant be sent to simple evented httpd servers in a farm. If all the app server is doing is processing the HMAC secured redirects then a few 100 threads at 1ms per request can handle significant traffic in the app server layer. I'll leave you to do the math.

The same technique could be used for any long lived httpd request, eliminating the need to use an evented application server stack and abandon transactions. Obviously, if your application server code has become so complex the non streaming requests are taking so long they are limiting throughput, then this isn't going to help.

For Apache mod_xsendfile:

```
protected void doSendFile(String path, Meta meta, HttpServletResponse response) {
  response.setHeader("X-Sendfile", assetStoreBase+path);
  response.setHeader("Content-Type", (String) meta.get("content-type"));
  if ( meta.has("filename")) {
     response.setHeader("Content-Disposition", "attachment; filename="+meta.get("filename"));
  }
  // thats it, response can be committed.
}
```

For nginx:

```
protected void doSendFile(String path, Meta meta, HttpServletResponse response) {
    response.setHeader("X-Accel-Redirect", assetStoreBase+path);
    response.setHeader("X-Accel-Buffering",buffering);
    response.setHeader("X-Accel-Limit-Rate",rateLimit);
    response.setHeader("X-Accel-Expires",cacheExpires);
    response.setHeader("Content-Type", (String) meta.get("content-type"));
    if ( meta.has("filename")) {
        response.setHeader("Content-Disposition", "attachment; filename="+meta.get("filename"));
    }
}
```

For LiteHttpd:

```
protected void doSendFile(String path, Meta meta, HttpServletResponse response) {
   response.setHeader("X-LIGHTTPD-send-file", assetStoreBase+path);
   response.setHeader("Content-Type", (String) meta.get("content-type"));
   if ( meta.has("filename")) {
       response.setHeader("Content-Disposition", "attachment; filename="+meta.get("filename"));
   }
}
```
