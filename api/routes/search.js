const  app  = require("../../app");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Search = require("../model/searchSchema.js");

// search sayfası. Dropdown menu den belirlenen kriterlere göre db den gelen sahalar.
router.get('/',(req,res,next)=>{
    Search
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
