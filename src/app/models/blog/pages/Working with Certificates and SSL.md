keytool -import -alias Erhvervssystemet -file Erhvervssystemet_Test_(systemcertifikat).p12_public_base64.cer -keystore truststore.jks

## Example
```
keytool -importcert -alias trustme -file baeldung.cer -keystore cacerts

Enter keystore password:

Trust this certificate? [no]:  yes
Certificate was added to keystore
```

```java
keytool -import -alias erhvervssystemet -file C:/EMEA/CVR/Certificates/Erhvervssystemet_Test.cer -keystore cvr.jks
```

Key Store Password:123456
Adding key terminal report
```
PS C:\EMEA\eslecvr> keytool -import -alias erhvervssystemet -file C:/EMEA/CVR/Certificates/Erhvervssystemet_Test.cer -keystore cvr.jks
Enter keystore password:  
Keystore password is too short - must be at least 6 characters
Enter keystore password:
Re-enter new password: 
Owner: C=DK, OID.2.5.4.97=NTRDK-19552101, O=Skatteforvaltningen, SERIALNUMBER=UI:DK-O:G:409d7cc4-4e01-464b-a629-303f7329fed5, CN=Erhvervssystemet Test (systemcertifikat)
Issuer: C=DK, O=Den Danske Stat, OU=Test - cti, CN=Den Danske Stat OCES udstedende-CA 1
Serial number: a57e3788754147ce29496a0787ec8b664a3f55f
Valid from: Thu Jun 29 11:31:14 EEST 2023 until: Sun Jun 28 11:31:13 EEST 2026
Certificate fingerprints:
         SHA1: 6C:16:0F:34:36:EA:84:0F:A3:8F:1A:D9:5F:7C:27:AD:BC:5B:37:DF
         SHA256: F3:AC:E8:DA:40:24:F9:E7:5B:F9:BD:88:01:28:12:CD:E0:4F:4D:A0:99:57:64:3D:0E:72:92:A8:E5:15:1C:6E
Signature algorithm name: RSASSA-PSS
Subject Public Key Algorithm: 3072-bit RSA key
Version: 3

Extensions:

#1: ObjectId: 1.3.6.1.5.5.7.1.3 Criticality=false
0000: 30 2D 30 2B 06 08 2B 06   01 05 05 07 0B 02 30 1F  0-0+..+.......0.
0010: 06 07 04 00 8B EC 49 01   02 30 14 86 12 68 74 74  ......I..0...htt
0020: 70 73 3A 2F 2F 75 69 64   2E 67 6F 76 2E 64 6B     ps://uid.gov.dk


#2: ObjectId: 1.3.6.1.5.5.7.1.1 Criticality=false
AuthorityInfoAccess [
  [
   accessMethod: caIssuers
   accessLocation: URIName: http://ca1.cti-gov.dk/oces/issuing/1/cacert/issuing.cer
,
   accessMethod: ocsp
   accessLocation: URIName: http://ca1.cti-gov.dk/ocsp
]
]

#3: ObjectId: 2.5.29.35 Criticality=false
AuthorityKeyIdentifier [
KeyIdentifier [
0000: 7F 28 9F D9 71 99 42 E2   75 E7 D7 35 76 2E 4D 08  .(..q.B.u..5v.M.
0010: 25 6D 76 5E                                        %mv^
]
]

#4: ObjectId: 2.5.29.19 Criticality=true
BasicConstraints:[
  CA:false
  PathLen: undefined
]

#5: ObjectId: 2.5.29.31 Criticality=false
CRLDistributionPoints [
  [DistributionPoint:
     [URIName: http://ca1.cti-gov.dk/oces/issuing/1/crl/issuing.crl]
]]

#6: ObjectId: 2.5.29.32 Criticality=false
CertificatePolicies [
  [CertificatePolicyId: [0.4.0.2042.1.1]
[]  ]
  [CertificatePolicyId: [1.2.208.169.1.1.1.3.7]
[]  ]
]

#7: ObjectId: 2.5.29.15 Criticality=true
KeyUsage [
  DigitalSignature
  Key_Encipherment
]

#8: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 64 BD 42 2B 50 C2 01 C5   68 79 19 CF 4D 64 BB C4  d.B+P...hy..Md..
0010: 7A B0 DB 6C                                        z..l
]
]

Trust this certificate? [no]:  yes
Certificate was added to keystore

```

## Curl
```
curl -v -GET -E Erhvervssystemet_Test_(systemcertifikat).p12:OfwrNN;f0-D+ https://erst-apipreprod.virk.dk/cvr2/serviceapi/myndighed/erduoppe
```
[curl - SSL CA Certificates](https://curl.se/docs/sslcerts.html)
[curl - How To Use](https://curl.se/docs/manpage.html#--cert-type)
