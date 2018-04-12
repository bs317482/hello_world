const mongoose = require('mongoose')
const Schema = mongoose.Schema

var FoodSchema = new Schema({
    name: String,
    calories: Number,
    benefits: String,
})