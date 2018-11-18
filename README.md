# nodeJS 搭建 https 服务

openssl 1.1.1 版本

## 创建根证书
```
openssl version -a
openssl genrsa -des3 -out rootCA.key 2048
openssl req -x509 -new -config rootCA.conf -key rootCA.key -sha256 -days 3650 -out rootCA.pem

```
## chrome 浏览器添加根证书

Settings -> Advanced -> Manage certificates

选择 System

选择 Certificates 

选择证书文件, 查看 detail -> Trust -> When using this certificate -> Always Trust

## 创建证书签名申请
certificate signing request
```
openssl genrsa -out server.key 2048
openssl req -new -config server.conf -out server.csr 
```
## 签发证书
````
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 3650 -sha256 -extfile v3.ext
```

