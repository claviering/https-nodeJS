const node_env = process.env.NODE_ENV || 'dev'

switch (node_env) {
  case 'dev':
    module.exports = require('./dev.js');
    break
  case 'sit':
    module.exports = require('./sit.js');
    break
  case 'prd':
    module.exports = require('./prd.js');
    break
}