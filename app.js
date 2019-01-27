const ip = require('ip');
const app = require('express')()
const debug = require('debug')('app')
const router = require('./app/router')
const config = require('./app/config');
const middleware = require('./app/middleware');
const httpsServer = require('./app/middleware/https')
const server = require('./app/middleware/spdy');

middleware(app)
router(app)

httpsServer(app).listen(config.port, debug(`http1.1 https://localhost:${config.port}\nhttps://${ip.address()}:${config.port}`))
const http2Port = config.port + 1
server(app).listen(http2Port, debug(`http2.0 https://localhost:${http2Port}\nhttps://${ip.address()}:${http2Port}`))
