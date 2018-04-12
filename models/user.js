var mongoose = require('mongoose')
var Schema = require('../db/schema')
var User = mongoose.model('User',Schema.UserSchema)



const UserSchema = new Schema({
    fullName: String,
    food: String,
    gym: String,
    weight: String,
    email: String,
    })
  



module.exports = User