var mongoose = require('mongoose')
var Schema = require('../db/schema')
var Gym = mongoose.model('Gym',Schema.gymSchema)


    module.exports = Gym