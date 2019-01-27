#!/bin/sh
# create self-signed server certificate:
source ~/.bashrc
echo 'make sure rootCA.conf and server.conf file exist'
echo 'openssl version ...'
openssl version -a | echo
echo 'step 0: create root CA ...'
openssl genrsa -des3 -out rootCA.key 2048
openssl req -x509 -new -config rootCA.conf -key rootCA.key -sha256 -days 3650 -out rootCA.pem
echo 'step 1: create server csr'
openssl genrsa -out server.key 2048
openssl req -new -config server.conf -out server.csr 
echo 'step 2: 用根证书颁发证书'
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 3650 -sha256 -extfile v3.ext
echo 'completed ...'