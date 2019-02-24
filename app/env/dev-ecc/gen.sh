#! /bin/sh
# create self-signed server certificate:
echo 'make sure root.conf and server.conf file exist'
echo 'openssl version requset 1.1.1 ...'
echo 'step 0: create root private key ...'
openssl ecparam -name secp384r1 -genkey -out root.key
echo 'step 1: create root certificate ...'
openssl req -x509 -new -config root.conf -key root.key -sha384 -days 3650 -out root.crt
echo 'step 2: create server private key ...'
openssl ecparam -genkey -name secp384r1 -out server.key
echo 'step 3: create server csr ...'
openssl req -new -config server.conf -key server.key -out server.csr -sha384
echo 'step 4: 用根证书颁发证书'
openssl x509 -req -in server.csr -CA root.crt -CAkey root.key -CAcreateserial -out server.crt -days 3650 -sha384 -extfile v3.ext
echo 'completed ...'