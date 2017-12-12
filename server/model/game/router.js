const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/:label')
  .get((...args) => controller.findByLabel(...args));

module.exports = router;
