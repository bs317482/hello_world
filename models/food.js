const Schema = require('../db/schema')
const mongoose = require('mongoose')

const foodModel = mongoose.model('Food', Schema.FoodsSchema)
module.exports = foodModel