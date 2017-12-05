const Controller = require('../../lib/controller');
const userFacade = require('./facade');
const config = require('../../config');
const crypto = require('pbkdf2');


class UserController extends Controller {

  register(req, res, next) {
    const body = {
      username: req.body.username,
      password: crypto.pbkdf2Sync(req.body.password, config.pbkdf2.salt, 1, 32, 'sha256').toString('hex'),
      mail: req.body.mail
    };
    console.log(body);

    userFacade.create(body)
    .then((userCreated) => {
      res.status(200).json(userCreated);
    }).catch((error) => {
      res.status(409).json(error.toJSON());
    });
  }

}

module.exports = new UserController(userFacade);
