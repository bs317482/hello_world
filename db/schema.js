// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const GymSchema = new Schema({
//     name: String,
// })

// const FoodSchema = new Schema({
//     name: String,
//     location: String,
// })

// const UserSchema = new Schema({
//     name: String,
// })

// module.exports = {
//     UserSchema,
//     FoodSchema,
//     GymSchema
// }

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GymsSchema = new Schema({
    name: String,
})

const FoodsSchema = new Schema({
    name: String,
    gyms: [GymsSchema]
})

const UserSchema = new Schema({
    name: String,
    age: String,
    foods: [FoodsSchema]
})

module.exports = {
    UserSchema,
    FoodsSchema,
    GymsSchema
}