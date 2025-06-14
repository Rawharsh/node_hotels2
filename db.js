// const mongoose = require('mongoose');

import mongoose from 'mongoose';
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

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