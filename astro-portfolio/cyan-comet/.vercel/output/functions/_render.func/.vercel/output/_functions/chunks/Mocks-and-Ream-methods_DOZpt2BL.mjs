const id = "Mocks-and-Ream-methods.md";
						const collection = "blog";
						const slug = "mocks-and-ream-methods";
						const body = "\r\nUsing Mockito Spy for mocking and using functions as they are. Sometimes you want to use mocks just for some functions. So that’s where `when(..).thenCallRealMethod()` comes in.\r\n\r\nSo let's get into the code:\r\n\r\n```java\r\n@SpringBootTest\r\nclass ServiceMockTest{\r\n    @Autowired\r\n    private MySearchService myService;\r\n    @SpyBean\r\n    private MyRepository myRepository;\r\n\r\n    @Test\r\n    void myMockTest() {\r\n        when(myService.getMs()).thenReturn(\"Hello from the mock!!\");\r\n        // when\r\n        String msResult = myService.getMs();\r\n        // then\r\n        assertEquals(\"Hello from the mock!!\", msResult);\r\n    }\r\n\r\n    @Test\r\n    void myNormalTest() {\r\n        when(myService.getMs()).thenCallRealMethod();\r\n        // when\r\n        String msResult = myService.getMs();\r\n        // then\r\n        assertEquals(\"Hello from the Real!!\", msResult);\r\n    }\r\n}\r\n```\r\n\r\nAnd that is how you use mocks and real methods in one `@Autowired` test class for Spring service and repository testing.\r\n";
						const data = {title:"Mocks and Real Methods",description:"Practical mocks in Spring Boot",pubDate:new Date(1719003600000),heroImage:"/blog/blog-placeholder-2.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/blog/Mocks-and-Ream-methods.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
