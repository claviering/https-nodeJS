const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./app/env/dev-ecc/domain.key'),
  cert: fs.readFileSync('./app/env/dev-ecc/domain.crt'),
  // requestCert: true,
  ca: [ fs.readFileSync('./app/env/dev-ecc/root.pem') ],
};

const server = tls.createServer(options, (socket) => {
  console.log('server connected', socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});
server.listen(8110, () => {
  console.log('server bound');
});
