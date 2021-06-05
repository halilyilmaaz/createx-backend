const  app  = require("../../app");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Homecontent = require("../model/homeContentSchema");
const Home = require("../model/homeSchema.js");
const Player =  require("../model/profilModel/playerSchema");
// ana sayfa adres bilgisine göre çekilen gönderiler.
router.get('/content',(req,res,next)=>{
    
    Homecontent
    .find()
     // kullanıcının profilindeki adrese göre find olması lazım.
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

