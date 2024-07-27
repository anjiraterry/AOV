const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  radio: {
    type: String,
    required: true
  },
  select: {
    type: String,
    // Specify any additional validation or default values if needed
  },
  bank: {
    type: String,
    trim: true
  },
  accountNo: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  number: {
    type: String,
    trim: true
  },
  bvn: {
    type: String,
    trim: true
  },
  gender: {
    type: Number
  },
  country: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
