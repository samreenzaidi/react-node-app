const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors') 
const ObjectId = require('mongodb').ObjectId;
const ProductModel = require("./models/product") 
const uri = "mongodb+srv://shamazaidicool:Mocha%402016@clusterproduct.5eronvy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProduct"
  
var app = express(); 
app.use(cors()); 
app.use(express.json()); 

mongoose.connect(uri)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err))
  
app.get("/getProducts", (req, res) => { 
    ProductModel.find({}) 
        .then((products) => res.json(products)) 
        .catch((err) => res.json(err)) 
}); 

app.get("/getProduct/:id", (req, res) => { 
    const query =  {
        _id: new ObjectId(req.params.id),
      };
    ProductModel.findOne(query)
        .then((product) => res.json(product)) 
        .catch((err) => res.json(err)) 
}); 
  
app.listen(3001, () => { 
    console.log('Server running on 3001'); 
}); 