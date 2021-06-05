const mongoose =require('mongoose');

const creatorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    il: {type: String, required: true},
    ilce: {type: String, required: true},
    mahalle: {type: String, required: true},
    spor: {type: String, required: true},
    
    
});




module.exports = mongoose.model('Creator',creatorSchema);