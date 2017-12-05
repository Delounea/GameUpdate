const Controller = require('../../lib/controller');
const userFacade = require('../user/facade');
const jwt = require('jsonwebtoken');
const config = require('../../config');

class AuthenticationController extends Controller {

  authenticate(req, res, next) {
    const reqUsername = req.body.username;
    const resPassword = req.body.password;
    userFacade.findOne({ username: reqUsername }).then((user) => {
      if (user) {
        if (user.password === resPassword) {
          const userToken = jwt.sign({ username : reqUsername }
            , config.jwt.key);

          res.status(200).json({ token:userToken });
        } else {
          res.status(401).json('Wrong username or password ');
        }
      } else {
        res.status(401).json('Wrong username or password ');
      }
    });
  }
}

module.exports = new AuthenticationController();
