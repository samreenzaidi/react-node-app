const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors') 
const ObjectId = require('mongodb').ObjectId;
const ProductModel = require("./models/productList") 
const uri = "mongodb+srv://shamazaidicool:Mocha%402016@clusterproduct.5eronvy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProduct"
  
var app = express(); 
app.use(cors()); 
app.use(express.json()); 

mongoose.connect(uri)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err))
  
app.get("/getProductList", (req, res) => { 
    ProductModel.find({}) 
        .then((productList) => res.json(productList)) 
        .catch((err) => res.json(err)) 
}); 

app.get("/getProductDetails/:id", (req, res) => { 
    const query =  {
        _id: new ObjectId(req.params.id),
      };
    ProductModel.findOne(query)
        .then((productdetails) => res.json(productdetails)) 
        .catch((err) => res.json(err)) 
}); 
  
app.listen(3001, () => { 
    console.log('Server running on 3001'); 
}); 