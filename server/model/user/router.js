const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/register')
  .post((...args) => controller.register(...args));

module.exports = router;
