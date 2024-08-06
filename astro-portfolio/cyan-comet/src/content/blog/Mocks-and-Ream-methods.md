---
title: "Mocks and Real Methods"
description: "Practical mocks in Spring Boot"
pubDate: "Jun 21, 2024"
heroImage: "/blog/blog-placeholder-2.jpg"
---

Using Mockito Spy for mocking and using functions as they are. Sometimes you want to use mocks just for some functions. So that’s where `when(..).thenCallRealMethod()` comes in.

So let's get into the code:

```java
class ActivitySearchServiceMockTest extends TestBehaviourValidation {
    @Autowired
    private MySearchService myService;
    @SpyBean
    private MyRepository myRepository;

    @Test
    void myMockTest() {
        when(myService.getMs()).thenReturn("Hello from the mock!!");
        // when
        String msResult = myService.getMs();
        // then
        assertEquals("Hello from the mock!!", msResult);
    }

    @Test
    void myNormalTest() {
        when(myService.getMs()).thenCallRealMethod();
        // when
        String msResult = myService.getMs();
        // then
        assertEquals("Hello from the Real!!", msResult);
    }
}
```

And that is how you use mocks and real methods in one `@Autowired` test class for Spring service and repository testing.
