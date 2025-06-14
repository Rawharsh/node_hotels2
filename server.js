import express from 'express'
const app = express();
import db from './db.js';
import  dotenv from 'dotenv';

dotenv.config();


import bodyParser from 'body-parser';
app.use(bodyParser.json());

import mongoose from 'mongoose';

app.get('/',(req,res)=>{
    res.send("welcome to my hotel")
})



import personRoutes from  './routes/personRoutes.js'
import menuItemRoutes from './routes/menuItemRoutes.js'

app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)


const PORT  = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log("listening on 3000")
})