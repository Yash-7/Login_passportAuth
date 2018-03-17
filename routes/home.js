const express = require('express');
const router = express.Router();
const passport = require('passport');

let User = require('../models/userSchema');

router.get('/',isLoggedIn,(req,res)=>{
    res.render('home');
});

// Middleware to check if user is logged in or not. If user is not logged in and trying to access homepage, he will be redirected to login page
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports = router;