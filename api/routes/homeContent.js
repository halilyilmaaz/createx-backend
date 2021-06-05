const  app  = require("../../app");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Homecontent = require("../model/homeContentSchema.js");
const player = require("../model/profilModel/playerSchema");

// anasayfa da içerik atılan ekran
router.post('/content',(req,res,next)=>{
    const homecontent = new Homecontent({
        _id : mongoose.Types.ObjectId(),
        
        icerik: req.body.icerik,
        
    });
    homecontent
    .save()
    
    .then(result => {
        console.log(result);
        res.status(201).json(result);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
  
});



module.exports = router;