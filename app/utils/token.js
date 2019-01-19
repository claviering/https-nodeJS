const path = require('path');
const { client } = require('../middleware/redis');
const config = require(path.resolve('./app/config'));
const debug = require('debug')('passport:utils-token');

module.exports = {
  getToken: (token) => {
    return new Promise((resolve, reject) => {
      client.get(token, (err, reply) => {
        debug('reply', reply)
        debug('typeof reply', typeof(reply))
        reply = JSON.parse(reply)
        debug('typeof reply', typeof(reply))
        data = reply ? resolve(reply) : resolve({isLogin: false})
      })
    })
  },
  removeToken: (token) => {
    try {
      client.del(token)
    } catch (err) {
      throw err
    }
  },
  setToken: async (token) => {
    try {
      let value = {
        isLogin: true
      }
      await client.set(token, JSON.stringify(value), 'EX', config.redis.ttl)
      debug('storeToken')
    } catch (err) {
      throw err
    }
  }
};
