// const mongoose = require('mongoose');

import mongoose from 'mongoose';

import  dotenv from 'dotenv';

dotenv.config();

//  const mongoURL =    process.env.MONGODB_URL_LOCAL 
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', () =>{
    console.log("connected to mongodb server");
});


db.on('error', () =>{
    console.log("Mongodb connection error");
});


db.on('disconnected', () =>{
    console.log(" mongodb server disconnected");
});



// module.exports = db;
export default db;