const ip = require('ip');
const app = require('express')()
const debug = require('debug')('app')
const router = require('./app/router')
const config = require('./app/config');
const middleware = require('./app/middleware');
const httpsServer = require('./app/middleware/https')

middleware(app)
router(app)

httpsServer(app).listen(config.port, debug(`https://localhost:${config.port}\nhttps://${ip.address()}:${config.port}`))
