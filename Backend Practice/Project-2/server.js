
/*
Problem Statement:
Create a REST API using Node.js, Express.js, and MongoDB
to retrieve mobile phone product data and filter products
based on their prices.

Requirements:
1. Retrieve all products from the database.
2. Find products with prices greater than 40000.
3. Find products with prices less than 40000.
4. Find products with prices equal to 40000.
5. Handle errors using try-catch blocks.
6. Return the results in JSON format.

Technologies Used:
Node.js, Express.js, MongoDB, and Mongoose.

Routes:
GET /        - Retrieve all products
GET /above   - Retrieve products priced above 40000
GET /below   - Retrieve products priced below 40000
GET /equal   - Retrieve products priced exactly 40000
*/


const express = require('express');
const app = express();
const connectDB = require("./config/db.js")
const Product = require("./models/product.js")
const PORT = 8080;

connectDB();



//Server
app.listen(PORT,()=>{
    console.log("Server is running...");
})

app.get('/',async(req,res)=>{
    try{
        const data = await Product.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error)
    }
})

app.get('/above',async(req,res)=>{
    try{
        const dataVobe = await Product.find({price: {$gt: 40000} });
        res.status(200).json(dataVobe);
    }catch(error){
        res.status(500).json(error)
    }
})

app.get('/below',async(req,res)=>{
    try{
        const dataBelow = await Product.find({price: {$lt: 40000} });
        res.status(200).json(dataBelow);
    }catch(error){
        res.status(500).json(error)
    }
})

app.get('/equal',async(req,res)=>{
    try{
        const dataEqual = await Product.find({price: {$eq: 40000} });
        res.status(200).json(dataEqual);
    }catch(error){
        res.status(500).json(error)
    }
})