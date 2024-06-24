import mongoose from "mongoose";

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
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
