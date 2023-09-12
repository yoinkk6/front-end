const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name Is Required']
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('User', UserSchema);