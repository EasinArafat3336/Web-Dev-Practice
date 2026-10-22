const mongoose = require("mongoose");

async function connectDB(){
    try{
        mongoose.connect('mongodb://localhost:27017/User');
        console.log("Database is connected.");
    }catch(error){
        console.log(`Database is not connected.`);
    }
}

module.exports = connectDB;