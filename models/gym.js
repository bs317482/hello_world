const Schema = require('../db/schema')
const mongoose = require('mongoose')

const gymModel = mongoose.model('Gym', Schema.GymsSchema)
module.exports = gymModel