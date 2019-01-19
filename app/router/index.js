const defaultRouter = require('./default');

module.exports = (app) => {
  app.use(defaultRouter)
};