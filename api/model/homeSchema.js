const mongoose =require('mongoose');

const homeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    il: {type: String, required: true},
    ilce: {type: String, required: true},
    mahalle: {type: String, required: true},
    gonderi: {type: String, required: true},
    
    
});




module.exports = mongoose.model('Home',homeSchema);