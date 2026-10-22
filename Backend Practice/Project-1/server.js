const express = require("express")
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

//MongoDB Connection
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/User');
        console.log("MongoDB is Connected.");
    }catch(error){
        console.log(`MongoDB is not connected. Beacuse of ${error}`);
    }
}
connectDB();

//Schema & Model
const productSchema = mongoose.Schema({

    Name: String,
    Model: String,
    Price: Number,
    Size: String,
})
const Product = mongoose.model('Product', productSchema);


//Server
app.listen(5000,()=>{
    console.log("The server is running.....");
})

app.get("/", async(req,res)=>{
    try{
        const data = await Product.find();
        await res.status()json(data);

    }catch(error){
        res.send(error)
    }
})

