---
title: "Mocks and Ream methods"
description: "Practical examples of ai chains"
pubDate: "Jun 21 2024"
heroImage: "/blog/blog-placeholder-2.jpg"
---

Using mokito spy for mocking and using functions as they are. Sometimes you like to use mocks just for some functions. So thats ware
`when(..).thenCallRealMethod()` comes is.

So lets get into the code:

```java
class ActivitySearchServiceMockTest extends TestBehaviourValidation {
    @Autowired
    private MySearchService myService;
    @SpyBean
    private MyRepository myRepository;

    @Test
    void myMockTest(){
	    when(myService.getMs()).therReturn("Hello form the mock!!");
	    //when
	    String msResult= myService.getMs();
	    //then
	    assertEquals("Hello form the mock!!",msResult);
    }

    @Test
    void myNormaltest(){
	    when(myService.getMs()).thenCallRealMethod();
	    //when
	    String msResult= myService.getMs();
	    //then
	    assertEquals("Hello form the Real!!",msResult);
    }
}
```

And that is how you use mocks and real methods in one `@Autowired` test class for spring service and repo testing.
