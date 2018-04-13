var mongoose = require('mongoose')
var Schema = require('../db/schema')
var Food = mongoose.model('Food',Schema.FoodSchema)

const FoodSchema = new Schema({
    name: String,
    calories: Number,
    benefits: String,
    })

    module.exports = User