const mongoose =require('mongoose');

const player = require('./profilModel/playerSchema');

const homeContentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    icerik: {type: String, required: true},
    
    
});




module.exports = mongoose.model('Homecontent',homeContentSchema);