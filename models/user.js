var mongoose = require('mongoose')
var Schema = require('../db/schema')
var User = mongoose.model('User',Schema.UserSchema)



const UserSchema = new Schema({
    Name: String,
    food: String,
    gym: String,
    weight: Number
  

module.exports = User