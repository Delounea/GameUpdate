const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
  label : {},
  lastVersion: {},
  lastVersionDate: {},
  steamBuildID: {}
});


module.exports =  gameSchema;
