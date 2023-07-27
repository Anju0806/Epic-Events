const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
  // Product schema fields
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: {
    type: String,
    required: false,
  },
  images: [{
    type: String,
    required: false,
  }],

  stall: { type: mongoose.Schema.Types.ObjectId, ref: 'Stall' }, // Reference to Stall model
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
