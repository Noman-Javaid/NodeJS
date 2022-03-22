//This code is interlinked with three files like mongoose2.js, index2.js, product.js
//Just Like Prodects table model in Laravel
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    company:String
})

module.exports = mongoose.model('products', ProductSchema)