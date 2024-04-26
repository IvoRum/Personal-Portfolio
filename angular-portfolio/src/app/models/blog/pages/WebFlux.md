Setting up webflux for v-6.0.12 spring java 17 
Url to reach
https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe
WebFlex Git
[spring-framework/spring-web/src/main/java/org/springframework/http/client/reactive/HttpComponentsClientHttpConnector.java at main · spring-projects/spring-framework (github.com)](https://github.com/spring-projects/spring-framework/blob/main/spring-web/src/main/java/org/springframework/http/client/reactive/HttpComponentsClientHttpConnector.java)
Quci introduction to PEM,CER,CRT & P12:
[certificates - PEM, CER, CRT, P12 - what is it all about? - Information Security Stack Exchange](https://security.stackexchange.com/questions/183072/pem-cer-crt-p12-what-is-it-all-about)

## 0.0 What is Webflux and why was it created
Why was Spring WebFlux created?

Part of the answer is the need for a non-blocking web stack to handle concurrency with a small number of threads and scale with fewer hardware resources. Servlet non-blocking I/O leads away from the rest of the Servlet API, where contracts are synchronous (`Filter`, `Servlet`) or blocking (`getParameter`, `getPart`). This was the motivation for a new common API to serve as a foundation across any non-blocking runtime. That is important because of servers (such as Netty) that are well-established in the async, non-blocking space.
## 0. Using both Webflux and Web
No, it is not possible to add both Spring Web and WebFlux to the same application. Spring MVC and Spring WebFlux have different runtime models and don't support the same server. If you add both spring-boot-starter-web and spring-boot-starter-webflux to your application, Spring Boot will configure it as a Spring MVC app. This is because many existing Spring Boot web applications (using MVC) will depend on the webflux starter to use the WebClient.

see:[Overview :: Spring Framework](https://docs.spring.io/spring-framework/reference/web/webflux/new-framework.html#webflux-framework-choice)
## 1. Imports
Diferent inports
```
implementation group: 'org.springframework.security', name: 'spring-security-core', version: '6.1.4'
```
All import in the project NOW:
```
implementation group: 'org.springframework.security', name: 'spring-security-web', version: '6.1.4'
implementation group: 'org.springframework.security', name: 'spring-security-config', version: '6.1.4'  
implementation group: 'org.springframework', name: 'spring-webflux', version: '6.0.12'
```
### 1.1 Add certificate to keystore
password:123456
! IMPORTENT: The KeyStore must be in the project root directory.
KeyStro docs:[KeyStore (Java Platform SE 7 ) (oracle.com)](https://docs.oracle.com/javase/7/docs/api/java/security/KeyStore.html)
Creating keystore:[Working with Certificates and SSL (Sun Java System Application Server Platform Edition 8.2 Administration Guide) (oracle.com)](https://docs.oracle.com/cd/E19830-01/819-4712/ablqw/index.html)
[keytool-Key and Certificate Management Tool (oracle.com)](https://docs.oracle.com/javase/1.5.0/docs/tooldocs/solaris/keytool.html)
Postman using certificates:[Add and manage digital certificates in Postman | Postman Learning Center](https://learning.postman.com/docs/sending-requests/certificates/#managing-certificates)

Algorithum names for the keystore manager: [Java Security Standard Algorithm Names (oracle.com)](https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#sslcontext-algorithms)



## 2. Creating a get service
X509 spring setup :[Reactive X.509 Authentication :: Spring Security](https://docs.spring.io/spring-security/reference/reactive/authentication/x509.html)
### Java Security standard Algorithum Names
[Java Security Standard Algorithm Names (oracle.com)](https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#sslcontext-algorithms)

### 2.1 ClientHttpConnector  
```
package com.dxc.es.eslecvr.service;  
  
import io.netty.handler.ssl.SslContext;  
import io.netty.handler.ssl.SslContextBuilder;  
import io.netty.handler.ssl.util.LazyX509Certificate;  
import org.springframework.http.client.reactive.ReactorClientHttpConnector;  
import org.springframework.stereotype.Service;  
import org.springframework.web.reactive.function.client.WebClient;  
import reactor.core.publisher.Mono;  
  
import javax.net.ssl.*;  
  
import reactor.netty.http.client.HttpClient;  
import reactor.netty.tcp.SslProvider;  
  
import java.io.FileInputStream;  
import java.io.FileNotFoundException;  
import java.io.IOException;  
import java.security.*;  
import java.security.cert.Certificate;  
import java.security.cert.CertificateException;  
import java.security.cert.X509Certificate;  
  
@Service  
public class MyndighedErduoppeService {  
  
    private final WebClient client;  
  
    public MyndighedErduoppeService(){  
        this.client = WebClient.create("https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe");  
    }  
  
    public Mono<String> getJa() {  
  
        String keystoreFile = "cvr.jks";  
        String keystorePassword = "123456";  
        String keyPassword ="OfwrNN;f0-D+";  
        try {  
            KeyStore keyStore = KeyStore.getInstance("JKS");  
            FileInputStream keystoreInputStream = new FileInputStream(keystoreFile);  
            keyStore.load(keystoreInputStream, keystorePassword.toCharArray());  
  
            Certificate certificate=keyStore.getCertificate("erhvervssystemet");  
  
  
            X509Certificate x509Certificate= new LazyX509Certificate(keyStore.getCertificate("erhvervssystemet").toString().getBytes()) ;  
  
            KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());  
            keyManagerFactory.init(keyStore, keyPassword.toCharArray());  
  
            System.out.println(keyStore.getType());  
            System.out.println(keyStore.getCertificate("erhvervssystemet"));  
  
            SslContext sslContext= SslContextBuilder.forServer(keyManagerFactory).build();  
  
            SslProvider certificateProvider=SslProvider.builder().sslContext(sslContext).build();  
            HttpClient httpClient = HttpClient.create().secure(certificateProvider);  
            WebClient webClient = WebClient.builder().baseUrl("https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe")  
                                           .clientConnector(new ReactorClientHttpConnector(httpClient))  
                                           .build();  
            return webClient.get()  
                         .retrieve()  
                         .bodyToMono(String.class);  
        } catch (UnrecoverableKeyException|KeyStoreException e) {  
            throw new RuntimeException(e);  
        } catch (FileNotFoundException e) {  
            throw new RuntimeException(e);  
        } catch (CertificateException e) {  
            throw new RuntimeException(e);  
        } catch (IOException e) {  
            throw new RuntimeException(e);  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException(e);  
        } catch (Exception e){  
            e.printStackTrace();  
            throw new RuntimeException(e);  
        }  
    }  
}
```
## Netty
[Reactor Netty Reference Guide (projectreactor.io)](https://projectreactor.io/docs/netty/1.1.5/reference/index.html)

## NOTES
For sync with webflux:
[Synchronous Use :: Spring Framework](https://docs.spring.io/spring-framework/reference/web/webflux-webclient/client-synchronous.html)

```
private static  
X509Certificate loadCertificate(byte[] certificateData) throws Exception {  
    CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");  
    try (InputStream in = new ByteArrayInputStream(certificateData)) {  
        return (X509Certificate) certificateFactory.generateCertificate(in);  
    }  
}

HttpClient httpClient= HttpClient.newBuilder().sslContext().build();
```

```
SSLContextSpi sslContextSpi = new  
HttpClient httpClient = HttpClient.newBuilder().sslContext(new SSLContext()).build();  
  
ClientHttpConnector connector = new HttpComponentsClientHttpConnector();  
  
this.client = WebClient.builder().baseUrl("").clientConnector(  
        new Client  
).build()  
        //.create("https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe");
```


```
package com.dxc.es.eslecvr.service;  
  
import io.netty.handler.ssl.SslContext;  
import io.netty.handler.ssl.SslContextBuilder;  
import org.springframework.http.client.reactive.ReactorClientHttpConnector;  
import org.springframework.stereotype.Service;  
import org.springframework.web.reactive.function.client.WebClient;  
import reactor.core.publisher.Mono;  
  
import javax.net.ssl.*;  
  
import reactor.netty.http.client.HttpClient;  
import reactor.netty.tcp.TcpSslContextSpec;  
  
import java.io.FileInputStream;  
import java.io.FileNotFoundException;  
import java.io.IOException;  
import java.security.*;  
import java.security.cert.CertificateException;  
  
@Service  
public class MyndighedErduoppeService {  
  
    private final WebClient client;  
  
    public MyndighedErduoppeService(){  
        this.client = WebClient.create("https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe");  
    }  
  
    public Mono<String> getJa(){  
        //SSLContext sslContext= new SSLContext();  
       // HttpClient httpClient= HttpClient.newBuilder().sslContext().build();        KeyStore ks= null;  
        SSLParameters sslParameters=null;  
        String certificate=null;  
        //SslContext sslContext=null;  
  
        String keystoreFile = "path/to/your/keystore.jks";  
        String keystorePassword = "123456";  
        String keyPassword = "123456";  
        try {  
            //ks = KeyStore.getInstance("JKS");  
            //PrivateKey keys=ks.getKey("erhvervssystemet", "123456".toCharArray());            //PrivateKey privateKey=            KeyStore keyStore = KeyStore.getInstance("JKS");  
            FileInputStream keystoreInputStream = new FileInputStream(keystoreFile);  
            keyStore.load(keystoreInputStream, keystorePassword.toCharArray());  
  
            // Initialize KeyManagerFactory  
            KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());  
            keyManagerFactory.init(keyStore, keyPassword.toCharArray());  
  
            // Get the KeyManagers  
            ks.getCertificate("erhvervssystemet");  
            //PrivateKey pk=ks.getKey("erhvervssystemet", "123456".toCharArray());  
            certificate=ks.getCertificate("erhvervssystemet").getType();  
            //X509KeyManager keyManager=new X509ExtendedKeyManager() {}  
            //sslParameters =new SSLParameters(ks.getCertificate("erhvervssystemet").getType());            SslContext sslContext= SslContextBuilder.forServer(keyManagerFactory).build();  
            HttpClient httpClient = HttpClient.create().secure(sslContextSpec -> {sslContextSpec.sslContext(sslContext);});  
            WebClient webClient = WebClient.builder()  
                                           .clientConnector(new ReactorClientHttpConnector(httpClient))  
                                           .build();  
        } catch (KeyStoreException e) {  
            throw new RuntimeException(e);  
        } catch (UnrecoverableKeyException e) {  
            throw new RuntimeException(e);  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException(e);  
        } catch (SSLException e) {  
            throw new RuntimeException(e);  
        } catch (FileNotFoundException e) {  
            throw new RuntimeException(e);  
        } catch (CertificateException e) {  
            throw new RuntimeException(e);  
        } catch (IOException e) {  
            throw new RuntimeException(e);  
        }  
        //TcpSslContextSpec tcpSslContextSpec = TcpSslContextSpec.forServer();  
        //SslProvider sslProvider=SslProvider.builder().sslContext(sslSpec->{});  
        return client.get()  
                .retrieve()  
                     .bodyToMono(String.class);  
    }  
}
```