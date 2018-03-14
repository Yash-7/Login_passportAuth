const express = require('express');
const router = express.Router();
const passport = require('passport');

let User = require('../models/userSchema');

router.get('/',isLoggedIn,(req,res)=>{
    res.render('home');
})
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports = router;