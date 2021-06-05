const  app  = require("../../../app");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Creator = require("../../model/profilModel/creatorSchema");

router.post('/creator',(req,res,next)=>{
    const creator = new Creator({
        _id : mongoose.Types.ObjectId(),
        il: req.body.il,
        ilce: req.body.ilce,
        mahalle: req.body.mahalle,
        spor: req.body.spor,
        
    });
    creator
    
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

router.get('/creator',(req,res,next)=>{
    Creator
    .find()
    .then(result => {
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
    
});



module.exports = router;