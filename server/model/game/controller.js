const Controller = require('../../lib/controller');
const gameFacade = require('./facade');

class GameController extends Controller {

  findByLabel(req, res, next) {
    gameFacade.findOne(req.params.label)
      .then((game) => {
        res.status(200).json(game);
      })
      .catch((error) => {
        res.status(204);
      });
  }
}

module.exports = new GameController(gameFacade);
