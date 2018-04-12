var mongoose = require('mongoose')
var Schema = require('../db/schema')
var User = mongoose.model('User',Schema.UserSchema)
module.exports = User