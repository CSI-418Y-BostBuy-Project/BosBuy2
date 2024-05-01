const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  soldBy: String, 
  category: String,
  subcategory: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;