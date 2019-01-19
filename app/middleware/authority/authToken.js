const debug = require('debug')('passport:authToken');
const token = require('../../utils/token');

module.exports = async (req, res, next) => {
  debug('req.session', req.session);
  const authorization = req.session.isLogin ? req.session.isLogin : false;
  if (authorization) {
    next();
    return;
  }
  let result = await token.getToken(req.cookies.token);
  debug('result', result);
  if (result.isLogin) {
    req.session.isLogin = true;
    next();
    return;
  }
  res.status(401).render('welcome');
}