module.exports = {
  app: {
    title: 'node https',
    description: 'node https',
    keywords: 'https'
  },
  hosts: '127.0.0.1',
  port: 8200,
  https: {
    passphrase: '123456',
    key: './app/env/dev/server.key',
    cert: './app/env/dev/server.crt',
  },
  db: {
    hosts: 'mongodb://127.0.0.1:27017/test',
    model: 'users',  // 数据库表名
  },
  session: {
    secret: 'cat',
    sessionID: 'sessionID',
    resave: false,
    saveUninitialized: true
  },
  cookie: {
    maxAge: 24 * 60 * 60,
    httpOnly: true,
    domain: 'example.com',
    resave: false,
    secure: false
  },
  redis: {
    hosts: '127.0.0.1',
    port: '6379',
    ttl: 60 * 60 * 24,  // redis 数据过期时间 秒
  },
  token: {
    secret: 'secret',
    expiresIn: 60 * 60 * 24
  }
};