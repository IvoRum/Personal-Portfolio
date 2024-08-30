---
title: "So you whant to mock"
description: "Moking the usfull part"
pubDate: "Aug 30, 2024"
heroImage: "/blog/mokito_v2.png"
---

# Introduction

After creating more and more mocks over time, I've decided to revisit the topic of mocks in my blog and, more broadly, the subject of testing. In this blog post, I’m summarizing the best ways to easily test with mocks and how to use them effectively.

In other words, this post aims to show you the most useful parts of the Mockito library, so you can level up as a programmer.

## Mock? What is a Mock?

A mock is something that should be there, but in reality, it’s just a facade—it doesn’t actually perform any actions but simply returns what you’ve set it up to return. Just as a puppet imitates a human being, a mock imitates some logic. In a simple example, a mock can imitate a repository that we don't want to call in our test.

```java
    @Test
    void myMockTest() {
        Repo mockRepo = mock(Repo.class);
        when(mockRepo.getData()).thenReturn(null);
        // when

	      var data = mockRepo.getData();
        // then
        assertNull(data);
    }
```

In essence, this is a way to pull the strings of our own code so that we can test it independently, or in other words, to create a real unit test. Real unit tests do not require external help from other methods or objects. They only test a single unit of work. But how do we test a unit of work that depends on other methods? That’s where mocks come in. By using mocks, we avoid calling every method down the chain of events.

## Mock Interface?

Yes, you can mock an implementation of an interface in any class where the interface is called. As an example, I will demonstrate mocking a Spring repository interface, but this is applicable to any interface method.

```java

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class ElMeterServiceTest {
    @Mock
    private InterfaceRepository interfaceRepository;
    private MyService myService;

    private static final String COMPANY_NAME = "Test_Company";

    @BeforeEach
    void setUp() {
        myService = new MyService(interfaceRepository);
    }

    @Test
    void InterfaceMockPositiveTest() {
	// given
	DataClass mockData = new DataClass("Data");

	given(interfaceRepository.getDataFromRepo(123)).willReturn(Optional.of(mockData));
	// when
	DataClass dataFromService = myService.getDataFromService(123);
	// then
	assertNotNull(dataFromService);
	assertEquals(mockData, dataFromService);

    }
}
```

## Using Mockito Spy for Mocking and Using Functions as They Are

Sometimes you want to use mocks for just some functions. That’s where `when(..).thenCallRealMethod()` comes in.

So let's dive into the code:

```java

class ServiceMockTest {
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

This is how you can use mocks and real methods in one `@Autowired` test class for Spring service and repository testing.

## Mocking Code That Gets Reused

Let’s say you have a utility class that is used in many places in your logic, but you want to mock one call and use the real method the next time. This may happen in a loop or just in the second call. Here is an example where I mock the first call and use the real method in the second.

```java
@Test
void mockOnceThenCallReal() {
    // GIVEN
    PersonDTO targetDTO = new PersonDTO(
        company,
        activityNew.getNumber(),
        activityNew.getCode(),
        activityNew.getStartDate(),
        activityNew.getEndDate()
    );
    final boolean[] isCheckDone = {false};
    doAnswer(invocation -> {
        if (!isCheckDone[0]) {
            PersonDTO argument = invocation.getArgument(0);
            if (argument.equals(targetDTO)) {
                isCheckDone[0] = true;
                return null;
            }
        }
        // Call the real method in subsequent calls or if the first check fails
        isCheckDone[0] = true;  // Ensure this is set so that the check isn't repeated
        invocation.callRealMethod();
         return null;  // Since the method is void, return null
    }).when(checkPersonName).validate(any(PersonDTO.class));
    // WHEN THEN
    assertThrows(RuntimeException.class,
            () -> personService.getWorkingPeople());
}
```

In this case, when calling the `checkPersonName` method from the `PersonDTO` class, it will mock the first call and then use the real method, which, in this scenario, will throw a `RuntimeException`.

## Final Thoughts

So that’s mainly it. This is how you will primarily use mocks for day-to-day testing. It’s not practical to dig too deep into mocking. Your mocks should be simple. If you have to mock something very complex, then you need to decompose and decouple your logic. Mocks are meant to replace something, but if you have to replace 90% of something, then what’s the point?

### Links

If you want to continue reading about mocks, here are some interesting posts that I’ve read:

[Spying with Mockito - to call or not to call a method](https://stevenschwenke.de/spyingWithMockito)
[Mockito Verify Not Called: How to Test That a Method Was Not Called](https://hatchjs.com/mockito-verify-not-called/)
