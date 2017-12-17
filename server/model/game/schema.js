const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
  label : { type: String, index: { unique: true }, required: [true, 'Label required'] },
  versionDate: { type: Date, default: Date.now },
  version: { type: String, required: [true, 'Version required'] },
  gamePlatform: { type: String, required: [true, 'Game platform required'] },
  updateSizes: [{
    version : String,
    size: Number
  }]
});

module.exports =  gameSchema;
