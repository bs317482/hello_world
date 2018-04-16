require('dotenv').config()

const mongoose = require('mongoose');

const User = require('../models/User');
const Food = require('../models/Food');
const Gym = require('../models/Gym');
const db = mongoose.connection

mongoose.connect(process.env.MONGODB_URI);


db.on('open', () => {
    console.log('buttche')
})
db.on('error', (error) => {
    console.log(error)
})

const bleu = new User({
    name: 'bleu',
    food: 'apples',
    gym: 'Crunch Fitness',
})
        
User.remove().then(() => {
    return User.insertMany([bleu])
}).then((users) => {
    console.log(users)
    console.log('Saved User')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})