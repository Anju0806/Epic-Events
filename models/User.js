const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  // User schema fields
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[\w-]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/ // Regular expression for email validation
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false // Set the default value to false 
  },
  //all associated events
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }], // Reference to Event model
  //all stalls 
  stalls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stall' }], // Reference to Stall model

});

// Create the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
