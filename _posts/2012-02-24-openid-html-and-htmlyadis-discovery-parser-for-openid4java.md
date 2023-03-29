---
layout: post
title: 'OpenID HTML and HTMLYadis Discovery parser for OpenID4Java'
description: ""
date: Fri Feb 24 2012 03:35:16 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/02/24/openid-html-and-htmlyadis-discovery-parser-for-openid4java/
categories: "OAuth, OpenID, Programming, Uncategorized"
hero: ../../../defaultHero.jpg
---
OpenID4Java is great library for doing [OpenID](http://openid.net "OpenID Foundation") and [OAuth](http://oauth.net "OAuth"). Step2 will probably be better but its not released. Unfortunately the HTML and HTMLYadis parsers rely on parsing the full HTML document and pull in a large number of libraries. These include things like Xerces and Resolver wich can cause problems if running multiple versions in the same JVM under OSGi. For anyone else wanting to eliminate dependencies here are Regex based parsers that have no dependencies outside code OpenID4Java and JRE.

```
package uk.co.tfd.sm.authn.openid;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.openid4java.discovery.yadis.YadisException;
import org.openid4java.discovery.yadis.YadisHtmlParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HTMLYadisDiscoveryParser implements YadisHtmlParser {

    private static final Logger LOGGER = LoggerFactory.getLogger(HTMLYadisDiscoveryParser.class);
    @Override
    public String getHtmlMeta(String input) throws YadisException {
        Pattern head = Pattern.compile("\\<head.*?\\</head\\>",Pattern.CASE_INSENSITIVE | Pattern.DOTALL );
        Pattern meta = Pattern.compile("\\<meta.*?http-equiv=\"X-XRDS-Location\".*?\\>", Pattern.CASE_INSENSITIVE| Pattern.DOTALL);
        Pattern url = Pattern.compile("content=\"(.*?)\"", Pattern.CASE_INSENSITIVE);
        Matcher headMatch = head.matcher(input);
        if ( headMatch.find() ) {
            Matcher metaMatcher = meta.matcher(headMatch.group());
            while( metaMatcher.find()) {                
                Matcher urlMatcher = url.matcher(metaMatcher.group());
                if ( urlMatcher.find() ) {
                    return urlMatcher.group(1);
                }
            } 
        } else {
            LOGGER.info("No head found in {} ", input);
        }
        return null;
    }
}

package uk.co.tfd.sm.authn.openid;

import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.commons.lang.StringUtils;
import org.openid4java.OpenIDException;
import org.openid4java.discovery.DiscoveryException;
import org.openid4java.discovery.html.HtmlParser;
import org.openid4java.discovery.html.HtmlResult; 
import com.google.common.collect.ImmutableSet;
 public class HTMLDiscoveryParser implements HtmlParser {
    @Override
   public void parseHtml(String htmlData, HtmlResult result) throws DiscoveryException {
        Pattern head = Pattern.compile("\\<head.*?\\</head\\>", Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
        Pattern link = Pattern.compile("\\<link.*?\\>", Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
        Pattern linkRel = Pattern.compile("rel=\"(.*?)\"", Pattern.CASE_INSENSITIVE);
        Pattern linkHref = Pattern.compile("href=\"(.*?)\"", Pattern.CASE_INSENSITIVE);
        Matcher headMatch = head.matcher(htmlData);
        if (headMatch.find()) {
            Matcher linkMatcher = link.matcher(headMatch.group());
            while (linkMatcher.find()) {
                String linkTag = linkMatcher.group();
                Matcher linkRelMatch = linkRel.matcher(linkTag);
                if (linkRelMatch.find()) {
                    Matcher linkHrefMatcher = linkHref.matcher(linkTag);
                    if (linkHrefMatcher.find()) {
                        String href = linkHrefMatcher.group(1);
                        Set<String> terms = ImmutableSet.copyOf(StringUtils.split(linkRelMatch.group(1), " "));
                        if (terms.contains("openid.server")) {
                            if (result.getOP1Endpoint() != null) {
                                throw new DiscoveryException("More than one openid.server entries found",
                                        OpenIDException.DISCOVERY_HTML_PARSE_ERROR);
                            }
                            result.setEndpoint1(href);
                        }
                        if (terms.contains("openid.delegate")) {
                            if (result.getDelegate1() != null) {
                                throw new DiscoveryException("More than one openid.delegate entries found",
                                        OpenIDException.DISCOVERY_HTML_PARSE_ERROR);
                            }
                            result.setDelegate1(href);
                        }
                        if (terms.contains("openid2.provider")) {
                            if (result.getOP2Endpoint() != null) {
                                throw new DiscoveryException("More than one openid.server entries found",
                                        OpenIDException.DISCOVERY_HTML_PARSE_ERROR);
                            }
                            result.setEndpoint2(href);
                        }
                        if (terms.contains("openid2.local_id")) {
                            if (result.getDelegate2() != null) {
                                throw new DiscoveryException("More than one openid2.local_id entries found",
                                        OpenIDException.DISCOVERY_HTML_PARSE_ERROR);
                            }
                            result.setDelegate2(href);
                        }
                    }
                }
            }
        }
    }
}
```
