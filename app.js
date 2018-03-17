const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser=require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const passport=require('passport')

// Initialise app
const app = express();

// We need config details(database endpoint) to connect to mongodb
const config = require('./config/database')

//Establishing mongoose connection
mongoose.connect(config.database);
let db = mongoose.connection;

//Check mongoose connection
db.once('open',function(){
    console.log('Connected to mongodb')
});

//Check mongoose errors
db.on('error',function(err){
    console.log(err);
});

// Grabbing database models
let User = require('./models/userSchema');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static file folder
app.use(express.static(path.join(__dirname, 'public')));

// Flash middleware
app.use(flash());

// Session middleware
app.use(session({
    secret: 'session secret',
    resave: true,
    saveUninitialized: true
}))

// Import passport object from passport.js file. This is where authentication happens
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session()); 


// app.get('/flash', function(req, res){
//     req.flash('info', 'Flash is back!')
//     res.redirect('/login');
//   });

// Setting routes
let home = require('./routes/home');
let login=require('./routes/login')
app.use('/home',home);
app.use('/',login);

app.listen('8080',()=>{
    console.log('Server running on port 8080');
})
