const { client } = require('../middleware/redis');
const debug = require('debug')('passport:default');
const token = require('../utils/token');

module.exports = {
  default: (req, res) => {
    res.send('hello')
  },
  checkToken: async (req, res) => {
    try {
      let params = req.body
      debug('params', params)
      let result = await token.getToken(params.token)
      debug('result', result)
      res.send(result)
    } catch (err) {
      res.send(err)
    }
  }
};
