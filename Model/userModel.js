const mongoose = require('mongoose');

// Define a schema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model
const User = mongoose.model('User', UserSchema);
module.exports = User;
