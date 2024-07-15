const mongoose = require('mongoose'); 
  
const productSchema = new mongoose.Schema({ 
    productName: { 
        type: String, 
        required: true
    }, 
    productPrice: { 
        type: String, 
        required: true
    },
}); 
  
  
const productList = mongoose.model("productList", productSchema); 
  
module.exports = productList;