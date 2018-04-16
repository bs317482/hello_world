var mongoose = require('mongoose')
var Schema = require('../db/schema')
var Food = mongoose.model('Food',Schema.foodSchema)


    module.exports = Food