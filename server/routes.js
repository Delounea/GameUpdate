const Router = require('express').Router;
const router = new Router();

const authentication = require('./model/authentication/router');
const user = require('./model/user/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to game-update-server API!' });
});

router.use('/authentication', authentication);
router.use('/user', user);

module.exports = router;
