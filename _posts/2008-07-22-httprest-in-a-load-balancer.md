---
layout: post
title: 'HTTPRest in a load balancer.'
description: ""
date: Tue Jul 22 2008 22:24:37 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/07/22/httprest-in-a-load-balancer/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The situation is that you have a rest based API, that is used by a client that doesnt support cookies, and you want to ensure that the client binds to an existing session. And if thats not a pain, it needs to work in a load balanced cluster.

Sound like an edge case. Well not really, Flex network connections dont share the same connection path as the browser, and so will not share the session cookie with the browser. This sounds like an easy thing in sakai, just use the ?sakai.session parameter to bind the session to the sakai session, and thats all fine until you get into a load balancer.

mod_jk needs a session cookie to make a request sticky and send it to the correct app server. Fortunately the load balancer understands 2 forms. The JSESSIONID cookie and in the request URI. eg

`http://localhost/servlets-examples/servlet/SessionExample;jsessionid=E0C23E770473D20640C4907F75304137.tomcat2?xyz=1`

Will translate as

- URI:http://localhost/servlets-examples/servlet/SessionExample
- Query String:xyz=1
- SessionID:E0C23E770473D20640C4907F75304137.tomcat2

Looking at the mod_jk source code (1.2.26) the session ID is parsed to locate the '.' and generate the app server node name of 'tomcat2'. The list of workers is then checked to see if a node name matches the name from the session cookie.

If you set up the workers.properties file with JKLogLevel=debug you can see what is going on inside the loadbalancer

`[Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] map_uri_to_worker::jk_uri_worker_map.c (678): Found session identifier ';jsessionid=E0C23E770473D20640C4907F75304137.tomcat2' in url '/servlets-examples/servlet/SessionExample;jsessionid=E0C23E770473D20640C4907F75304137.tomcat2' [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] map_uri_to_worker::jk_uri_worker_map.c (682): Attempting to map URI '/servlets-examples/servlet/SessionExample' from 3 maps [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] find_match::jk_uri_worker_map.c (503): Attempting to map context URI '/_=ieb_lb_test' source 'JkMount' [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] find_match::jk_uri_worker_map.c (516): Found a wildchar match '/_=ieb_lb_test' [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] jk_handler::mod_jk.c (2222): Into handler jakarta-servlet worker=ieb_lb_test r->proxyreq=0 [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] wc_get_worker_for_name::jk_worker.c (115): found a worker ieb_lb_test [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] wc_get_name_for_type::jk_worker.c (292): Found worker type 'lb' [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] init_ws_service::mod_jk.c (888): Service protocol=HTTP/1.1 method=GET host=(null) addr=172.16.1.1 name=bort.caret.local port=80 auth=(null) user=(null) laddr=10.0.0.197 raddr=172.16.1.1 uri=/servlets-examples/servlet/SessionExample;jsessionid=E0C23E770473D20640C4907F75304137.tomcat2 [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] service::jk_lb_worker.c (940): service sticky_session=1 id='E0C23E770473D20640C4907F75304137.tomcat2' [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] get_most_suitable_worker::jk_lb_worker.c (778): searching worker for partial sessionid E0C23E770473D20640C4907F75304137.tomcat2 [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] get_most_suitable_worker::jk_lb_worker.c (786): searching worker for session route tomcat2

[Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] get_most_suitable_worker::jk_lb_worker.c (799): found worker tomcat2 (tomcat2) for route tomcat2 and partial sessionid E0C23E770473D20640C4907F75304137.tomcat2

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Routing to the tomcat2 appserver

[Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] service::jk_lb_worker.c (962): service worker=tomcat2 route=tomcat2 [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] ajp_get_endpoint::jk_ajp_common.c (2579): acquired connection pool slot=0 [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] ajp_marshal_into_msgb::jk_ajp_common.c (553): ajp marshaling done [Tue Jul 22 21:57:52 2008][19198:1251589008] [debug] ajp_service::jk_ajp_common.c (2050): processing tomcat2 with 2 retries`

You can see where the session is routed to the appserver node. There is a trick at this point that a little bit of experimentation reveals. The ID on the end of the session should match the name of the worker and should match the jvmRoute parameter and the sakai session ID.

If I have 2 nodes called tomat1 and tomcat2,

- I must have 2 workers in the load balancer called tomcat1 and tomcat2
- I must have 2 app servers with jvmRoute= tomcat1 and tomcat2 in the Engine element of the server.xml on each app server node
- And for Sakai, I must have a the serverId set to tomcat1 and tomcat2 on each appserver node

Sadly, anything else results in the request being sent to a random app server node.
