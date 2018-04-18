const mongoose = require('mongoose')
const Schema = mongoose.Schema

var foodSchema = new Schema({
    name: String,
    calories: Number,
})

    var gymSchema = new Schema({
        name: String,
        city: String,
        Hours: Number,
        })

const userSchema = new Schema({
    name: String,
    food: [foodSchema],
    gym: [gymSchema],
    })
    

    module.exports = {userSchema, gymSchema, foodSchema}