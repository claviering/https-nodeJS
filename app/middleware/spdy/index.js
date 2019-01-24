const fs = require('fs')
const spdy = require('spdy')
const path = require('path')
const config = require(path.resolve('./app/config'))

const options = {
  key: fs.readFileSync(path.resolve(config.https.key)),
  cert: fs.readFileSync(path.resolve(config.https.cert)),
  passphrase: config.https.passphrase
};
module.exports = (app) => spdy.createServer(options, app)
