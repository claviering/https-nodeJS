const ip = require('ip')
const path = require('path')
const app = require('express')()
const debug = require('debug')('app')
const router = require(path.resolve('./app/router'))
const config = require(path.resolve('./app/config'))
const middleware = require(path.resolve('./app/middleware'))
const server = require(path.resolve('./app/middleware/spdy'))
const httpsServer = require(path.resolve('./app/middleware/https'))

middleware(app)
router(app)

httpsServer(app).listen(config.port, debug(`http1.1 https://localhost:${config.port}\nhttps://${ip.address()}:${config.port}`))
const http2Port = config.port + 1
server(app).listen(http2Port, debug(`http2.0 https://localhost:${http2Port}\nhttps://${ip.address()}:${http2Port}`))
