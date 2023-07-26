const mongoose = require('mongoose');

const stallSchema = new mongoose.Schema({
  // Stall schema fields
  name: { type: String, required: true },
  number: { type: Number, required: true },
  contact_number: { type: Number, required: false },
  description: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, // Reference to Event model
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Reference to Product model
});

const Stall = mongoose.model('Stall', stallSchema);
module.exports = Stall;


//make product a schema ,not model
