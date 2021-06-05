const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRoutes = require('./api/routes/home');
const searchRoutes = require('./api/routes/search');
const homecontent= require('./api/routes/homeContent');
const profilC = require("./api/routes/profil/creator");
const profilP = require("./api/routes/profil/player");


const dburl = "mongodb+srv://halil:Sakulta1@cluster0.jwajg.mongodb.net/createx?retryWrites=true&w=majority"
mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology:true})
.then((result)=>console.log('baglantı kuruldu'))
.catch((error)=> console.log(error))

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
// for more readeble
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATHC,DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes 
app.use('/home',homeRoutes);
app.use('/homecontent',homecontent);
app.use('/search',searchRoutes);
app.use('/profilp',profilP);
app.use('/profilc',profilC);

app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500 );
    res.json({
        error : {
            message: error.message
        }
    });
});


module.exports = app;