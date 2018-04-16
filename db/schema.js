const mongoose = require('mongoose')
const Schema = mongoose.Schema

var FoodSchema = new Schema({
    name: String,
    calories: Number,
})

    var GymSchema = new Schema({
        name: String,
        city: String,
        Hours: Number,
        })

const UserSchema = new Schema({
    Name: String,
    food: [FoodSchema],
    gym: [GymSchema],
    })
    
    module.exports = {UserSchema, GymSchema, FoodSchema}