const mongoose =require('mongoose');

const playerSchema = mongoose.Schema({
    _Userid: mongoose.Schema.Types.ObjectId,
    il: {type: String, required: true},
    ilce: {type: String, required: true},
    mahalle: {type: String, required: true},
   
    
    
});




module.exports = mongoose.model('Player',playerSchema);