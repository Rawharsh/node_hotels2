import express from 'express'
const router = express.Router();

import MenuItem from './../models/MenuItem.js';



// post and get api for /menu endpoint


router.post('/', async (req,res)=>{
    try{
             const menuData = req.body;
             const newMenu = new MenuItem(menuData);

             const response  = await newMenu.save();
             console.log("new menu data saved");
             res.status(200).json(response);
    }catch(err){
          console.log(err);
          res.status(500).json({error : 'Internal server error'});
    }
})


router.get('/',async (req,res)=>{
    try{
            const response = await MenuItem.find();
            console.log('menu data fetched ');
            res.status(200).json(response);
    }catch(err){
              console.log(err);
              res.status(500).json({error : 'Internal server error'});
    }
})

router.get('/:taste', async (req,res)=>{
    const taste = req.params.taste;
  try{
           if(taste == 'sour' || taste == 'sweet' || taste == 'spicy'){
             const response = await MenuItem.find({taste : taste})
             res.status(200).json(response);
    }else{
        res.status(400).json({error : 'Invalid taste type'});
    }
  }catch(err){
       console.log(err);
              res.status(500).json({error : 'Internal server error'});
  }
  
})

export default router;