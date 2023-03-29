---
layout: post
title: 'Ajax and UTF8'
description: ""
date: Tue Aug 21 2007 12:21:29 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/08/21/ajax-and-utf8/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I have suddenly found out that the faith that I had placed in the javascript escape(), encodeURI() and encodeURIComponent() for encoding correctly were misplaced. Here is the problem, a traditional form submits UTF-8 perfectly and all works. An AJAX form only works if there are no UTF-8 characters. And this only happens with certain UTF-8 characters that are high up in the range. It turns out that %20%u5FFD encoding produced by the above doesnt work when submitted as a application/x-www-form-urlencoded to Tomcat, even with charset=utf-8 or Character-Encoding: UTF-8; . The encoding has to be +%5F%FD to make it work. If you bring up tcpdump and look at the raw tcp packets you will see that Firefox uses the latter for direct posts.

Unfortunately there is no javascript encoder to do this :(, but its not that hard.

```
var result = encodeURIComponent(formVar);
result = result.replace(/%20/g,"+");
for ( var p = result.indexOf("%u"); p != -1; p = result.indexOf("%u")  ) {
   var code = result.substr(p,6);
   var rep = '%' + code.substr(2,2) + '%' + code.substr(4,2);
   result = result.replace(code,rep);
}
var p = -1;
for ( p = result.indexOf("%",p+1); p != -1; p = result.indexOf("%",p+1)  ) {
   var code = result.substr(p,3);
   var rep = code.toUpperCase();
   result = result.replace(code,rep);
}
return result;
```

Its not exactly the perfect way, but it works.
