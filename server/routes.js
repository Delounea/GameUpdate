const Router = require('express').Router;
const router = new Router();

const authentication = require('./model/authentication/router');
const user = require('./model/user/router');
const game = require('./model/game/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to game-update-server API!' });
});

router.use('/authentication', authentication);
router.use('/user', user);
router.use('/game', game);

module.exports = router;
