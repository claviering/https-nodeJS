const router = require('express').Router();
const defaultCtrl = require('../controller/default.js');
const middleware = require('../middleware/authority');

router.get('/', defaultCtrl.default);

module.exports = router