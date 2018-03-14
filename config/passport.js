const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../models/userSchema');

module.exports=function(passport){
    passport.use(new LocalStrategy({
        passReqToCallback : true
      },function(req,username,password,done){
            users.findOne({username:username},function(err,user){
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                return done(null, user);
            })
        }
    ))
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        users.findById(id, function(err, user) {
            done(err, user);
        });
    });

}