const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product Name Is Required']
  },
  price: {
    type: Number,
    required: [true, 'Product Price Is Required']
  },
  // category: {
  //   type: Array,
  //   required: [true, 'Product Category Is Required']
  // },
  description: {
    type: String,
    required: [true, 'Product Description Is Required']
  },
  image: {
    type: String,
    required: [false, 'Product Image Is Required']
  }
});

module.exports = mongoose.model('products', ProductSchema);