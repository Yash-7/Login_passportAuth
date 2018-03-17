const express = require('express');
const router = express.Router();
const passport = require('passport');

let User = require('../models/userSchema');
router.get('',(req,res)=>{
    res.redirect('/login');
})
router.get('/login',(req,res)=>{
    //req.flash is used to flash messages. It contains msg from passort.js file and the message is rendered by ejs file 
    res.render('login.ejs',{ messages:req.flash('loginMessage') });
})
// Passport authentication happens in this page
router.post('/login',
    passport.authenticate('local', {
        successRedirect : '/home',
        failureRedirect : '/login',
        failureFlash : true 
    })
);
// Destroying session before logout
router.get('/logout', function(req, res, next) {
    if (req.session) {
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/login');
        }
      });
    }
  });

module.exports = router;