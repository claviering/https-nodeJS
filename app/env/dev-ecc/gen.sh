#!/bin/sh
# create self-signed domain certificate:
source ~/.bashrc
echo 'make sure root.conf and domain.conf file exist'
echo 'openssl version ...'
openssl version -a | echo
echo 'step 0: create root private key ...'
openssl ecparam -genkey -name secp384r1 -out root.key
openssl req -x509 -new -config root.conf -key root.key -sha384 -days 3650 -out root.pem
echo 'step 1: create domain csr'
openssl ecparam -genkey -name secp384r1 -out domain.enc.key
openssl req -new -config domain.conf -out domain.csr
echo 'Remove passphrase from a key'
openssl ecparam -name secp384r1 -in domain.enc.key -out domain.key
echo 'step 2: 用根证书颁发证书'
openssl x509 -req -in domain.csr -CA root.pem -CAkey root.key -CAcreateserial -out domain.crt -days 3650 -sha384 -extfile v3.ext
echo 'completed ...'