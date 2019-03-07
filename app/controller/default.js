const path = require('path')
const debug = require('debug')('passport:default')
const token = require(path.resolve('.app//utils/token'))
const { client } = require(path.resolve('./app/middleware/redis'))

module.exports = {
  default: (req, res) => {
    res.send('hello world')
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
