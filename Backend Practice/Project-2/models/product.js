const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    brandName: String,
    model: String,
    price: Number,
    ram: String,
    storage: String,
    color: String,
    battery: Number,
    inStock: Boolean
})
const Product = mongoose.model('Product', productSchema,"Products");

module.exports = Product;