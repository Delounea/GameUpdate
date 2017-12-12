const Facade = require('../../lib/facade');
const gameSchema = require('./schema');

class GameFacade extends Facade {

  findMultiple(gamesId) {
    return this.model.find({ label : { $in: gamesId } }).exec();
  }

}

module.exports = new GameFacade('Game', gameSchema);
