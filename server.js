const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors') 
const ObjectId = require('mongodb').ObjectId
const ProductModel = require("./models/Product") 
const CartItemModel = require("./models/CartItem") 
const uri = "mongodb+srv://shamazaidicool:Mocha%402016@clusterproduct.5eronvy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProduct"
  
var app = express(); 
app.listen(9000, () => console.log('Server running on 9000'))
app.use(cors()); 
app.use(express.json()); 

mongoose.connect(uri)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err))
  
app.get("/getProductList", (req, res) => { 
    ProductModel.find({}) 
        .then((result) => res.json(result)) 
        .catch((err) => res.json(err)) 
}); 

app.get("/getProductDetails/:id", (req, res) => { 
    const query =  {
        _id: new ObjectId(req.params.id),
      };
    ProductModel.findOne(query)
        .then((result) => res.json(result)) 
        .catch((err) => res.json(err)) 
}); 

app.post("/addToCart", (req, res) => { 
    CartItemModel.create({ 
        title: req.body.title, 
        description: req.body.description, 
        category: req.body.category,  
        price: req.body.price, 
        stock: req.body.stock, 
        sku: req.body.sku,
        images: req.body.images, 
        thumbnail: req.body.thumbnail 
    }) 
    .then((result) => res.json(result)) 
    .catch((err) => res.json(err)); 
}); 