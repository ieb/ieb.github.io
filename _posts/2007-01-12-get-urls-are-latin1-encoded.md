---
layout: post
title: 'GET urls are latin-1 encoded.'
description: ""
date: Fri Jan 12 2007 18:36:17 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/01/12/get-urls-are-latin-1-encoded/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Looks like get urls are latin-1 encoded.

Wrapping the request and recoding looks like it works.

protected void doGet(final HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { // GET doesnt do UTF-8 encoding even URL, take the default encoding of the machine HttpServletRequestWrapper httprequest = new HttpServletRequestWrapper(request) { @Override public String getParameter(String name) { String param = request.getParameter(name); try { return new String(param.getBytes("ISO-8859-1"),"UTF-8"); } catch (UnsupportedEncodingException e) { return param; } } }; execute(httprequest, response); }
