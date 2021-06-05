const  app  = require("../../../app");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Player = require('../../model/profilModel/playerSchema');

router.post('/player',(req,res,next)=>{
    const player = new Player({
        _Userid : mongoose.Types.ObjectId(),
        il: req.body.il,
        ilce: req.body.ilce,
        mahalle: req.body.mahalle,
        
        
    });
    player
    
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

router.get('/player',(req,res,next)=>{
    Player
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