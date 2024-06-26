const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
  googleId: { type: String, index: true },
  facebookId: { type: String, index: true },
  name: {type: String },
  email:{type: String}
  // Other fields as needed
});

const UserAuth = mongoose.model('UserAuth', userAuthSchema);

module.exports = UserAuth;