import express from 'express'
const app = express();
import db from './db.js';


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





app.listen(3000,()=>{
    console.log("listening on 3000")
})