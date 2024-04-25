#blog 
To be used together with @[`Configuration`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html "annotation interface in org.springframework.context.annotation") classes as follows, enabling annotation-driven async processing for an entire Spring application context:

```
 @Configuration
 @EnableAsync
 public class AppConfig {

 }
```
`MyAsyncBean` is a user-defined type with one or more methods annotated with either Spring's `@Async` annotation, the EJB 3.1 `@jakarta.ejb.Asynchronous` annotation, or any custom annotation specified via the [`annotation()`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/EnableAsync.html#annotation()) attribute. The aspect is added transparently for any registered bean, for instance via this configuration:
To customize all this, implement [`AsyncConfigurer`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/AsyncConfigurer.html "interface in org.springframework.scheduling.annotation") and provide:

- your own [`Executor`](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/Executor.html "class or interface in java.util.concurrent") through the [`getAsyncExecutor()`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/AsyncConfigurer.html#getAsyncExecutor()) method, and
- your own [`AsyncUncaughtExceptionHandler`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/interceptor/AsyncUncaughtExceptionHandler.html "interface in org.springframework.aop.interceptor") through the [`getAsyncUncaughtExceptionHandler()`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/AsyncConfigurer.html#getAsyncUncaughtExceptionHandler()) method.

**NOTE: [`AsyncConfigurer`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/AsyncConfigurer.html "interface in org.springframework.scheduling.annotation") configuration classes get initialized early in the application context bootstrap. If you need any dependencies on other beans there, make sure to declare them 'lazy' as far as possible in order to let them go through other post-processors as well.**
```
 @Configuration
 @EnableAsync
 public class AppConfig implements AsyncConfigurer {

     @Override
     public Executor getAsyncExecutor() {
         ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
         executor.setCorePoolSize(7);
         executor.setMaxPoolSize(42);
         executor.setQueueCapacity(11);
         executor.setThreadNamePrefix("MyExecutor-");
         executor.initialize();
         return executor;
     }

     @Override
     public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
         return new MyAsyncUncaughtExceptionHandler();
     }
 }
```


