const fs = require('fs')
const path = require('path')
const https = require('https')
const config = require(path.resolve('./app/config'));

const options = {
  key: fs.readFileSync(path.resolve(config.https.key)),
  cert: fs.readFileSync(path.resolve(config.https.cert)),
  passphrase: config.https.passphrase
};

module.exports = (app) => https.createServer(options, app)
