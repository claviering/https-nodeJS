const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();

// https 配置密钥和证书
const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
  passphrase: '123456'
};

//创建http与HTTPS服务器
var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

//可以根据请求判断是http还是https
app.get('/', function (req, res) {
  if(req.protocol === 'https') {
      res.send('This is https visit!');
  }
  else {
      res.send('This is http visit!');
  }
});

httpServer.listen(9001, () => {
  console.log('Example http listening on port 9001!');
  console.log('http://127.0.0.1:9001');
});

httpsServer.listen(9443, () => {
  console.log('Example https listening on port 9443!');
  console.log('https://127.0.0.1:9443');
});
