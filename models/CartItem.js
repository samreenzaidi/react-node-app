const mongoose = require('mongoose') 
  
const cartItemSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    category: String,  
    price: Number, 
    stock: Number, 
    sku: String,
    images: Array, 
    thumbnail: String
})
  
module.exports = mongoose.model('CartItem', cartItemSchema)