---
layout: post
title: 'Variable char encoding of bytes'
description: ""
date: Fri Jul 23 2010 11:28:16 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/07/23/variable-char-encoding-of-bytes/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I may not be looking in the right place, but often I want to take a byte\[] and convert it into a char\[] where the char representation comes from a set of chars that I decide on. This is not for false encryption or obfuscation, I just want a safe compact representation of keys. Hex is ok, but bulky and does no give much flexibility. I couldn't find anything off the shelf that would work with random encoding sequences and random byte\[] lengths so here is what I quickly put together. Published for any one who also couldn't find anything off the shelf. It benchmarks at about 110K encodings per second (9ns) on a Mac Book Pro Java16 and is reasonable memory efficient. It could be made more efficient, but that would require more cpu.

```
    /**
   * Generate an encoded array of chars using as few chars as possible
   *
   * @param hash
   *          the hash to encode
   * @param encode
   *          a char array of encodings any length you lik but probably but the shorter it
   *          is the longer the result. Dont be dumb and use an encoding size of < 2.
   * @return
   */
  public static String encode(byte[] hash, char[] encode) {
    StringBuilder sb = new StringBuilder(hash.length);
    int x = (int)(hash[0]+128);
    int xt = 0;
    int i = 0;
    while(i < hash.length) {
      if ( x < encode.length) {
        i++;
        if ( i < hash.length ) {
          if ( x == 0 ) {
            x = (int)(hash[i]+128);
          } else {
            x = (x+1)*(int)(hash[i]+128);
          }
        } else {
          sb.append(encode[x]);
          break;
        }
      }
      xt = x%encode.length;
      x = x/encode.length;
      sb.append(encode[xt]);
    }
    return sb.toString();
  }
```

And a unit test that checks the operation, and checks for collisions (AFAICT the algorithm is complete, but I could have missed something).

```
  @Test
  public void testEncoding() {
    SecureRandom sr = new SecureRandom();
    String encoding = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (int j = 10; j < encoding.length(); j++) {
      for (int i = 1; i < 100; i++) {
        byte[] b = new byte[i];
        sr.nextBytes(b);
        System.err.println(StringUtils.encode(b, encoding.substring(0, j).toCharArray()));
      }
    }
  }

  /**
   *  This is a very long running test, do not enable unless you want to wait a long time.
   */
  @Test
  public void testEncodingCollision() {
    SecureRandom sr = new SecureRandom();
    String encoding = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    long l = 200000;
    long m = 1000;
    Set<String> check = new HashSet<String>((int)l);
    for (long j = 0; j < m; j++) {
      long s = System.currentTimeMillis();
      check.clear();
      for (long i = 0; i < l; i++) {
        byte[] b = new byte[20];
        sr.nextBytes(b);

        String e = StringUtils.encode(b, encoding.toCharArray());

        if (check.contains(e)) {
          Assert.fail();
        }
        check.add(e);
      }
      long e = System.currentTimeMillis();
      long t = (1000*(e-s+1))/l;
      long o = (1000*l)/(e-s+1);
      long tleft = (t*l*(m-j))/1000000;
      System.err.println("No Collisions after "+l*j+" operations of "+l*m+" "+((100*l*j)/(l*m))+" % at "+t+" ns/op "+o+" ops/s eta "+tleft);
    }
  }
```

If you want to use this, feel free and are worried about license consider the code Apache 2 Licensed (c) Ian Boston. If you do use this and find a problem or if you know of something out there in a standard lib that does the same, please comment.
