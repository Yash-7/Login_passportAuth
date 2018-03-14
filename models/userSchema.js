var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
});
UserSchema.methods.validPassword = function(password){
  return (this.password===password)
}
let User = module.exports = mongoose.model('User',UserSchema);