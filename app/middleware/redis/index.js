const path = require('path');
const config = require(path.resolve('./app/config'));
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const debug = require('debug')('sit1:redis');
const client = redis.createClient(config.redis.port, config.redis.hosts);

client.on('ready', () => {
  debug('redis online');
});

client.on('connect', () => {
  debug(`connect redis ${config.redis.hosts + ':' + config.redis.port} success`);
});

client.on('error', (err) => {
  debug('err', err);
});

// 数据库密码
// client.auth(config.redis.pass, () => {
//     debug('auth redis success');
// });

const redisInstance = new RedisStore({
  client
});

module.exports = {
  redisInstance,
  client
};