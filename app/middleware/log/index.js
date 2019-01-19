const ip = require('ip')
const path = require('path');
const log4js = require('log4js')
const log = log4js.getLogger("cheese")
const config = require(path.resolve('./app/config/log4js.config.js'))
log4js.configure(config)

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'demo',
  serverIp: ip.address()
}

module.exports = async (req, res, next) => {
  const start = Date.now()
  const {protocol, method, originalUrl, hostname, ip, body,params } = req
  const client = {
    protocol,
    method,
    originalUrl,
    hostname,
    ip,
    body,
    params
  }
  await next()
  const responseTime = Date.now() - start;
  const logMessage = JSON.stringify(Object.assign(baseInfo, client, {
    responseTime: `${responseTime/1000}s`,
    headersSent:  req.headersSent
  }))
  log.info(logMessage)
}