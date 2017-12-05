const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String, required: [true, 'Username required'] },
  password: { type: String, required: [true, 'Password required'] },
  mail: {
    type: String,
    validator: v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
    required: [true, 'Email required']
  }
});


module.exports =  userSchema;
