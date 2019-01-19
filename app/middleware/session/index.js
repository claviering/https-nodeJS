
const path = require('path');
const session = require('express-session');
const config = require(path.resolve('./app/config'));

module.exports = session({
  name: config.session.sessionID,
  secret: config.session.secret,
  resave: config.session.resave,
  saveUninitialized: config.session.saveUninitialized,
  cookie: config.cookie,
})
