var mongoose = require('mongoose')
var Schema = require('../db/schema')
var Gym = mongoose.model('Gym',Schema.GymSchema)

const GymSchema = new Schema({
    name: String,
    city: String,
    Hours: Number,
    })

    module.exports = User