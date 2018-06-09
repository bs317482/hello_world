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
})

const apple = new Foods({
    name: 'Apple',
})

const gym1 = new Gyms({
    name: 'Crunch Fitness',
})


const tony = new User({
    name: 'Tony',
})

const grape = new Food({
    name: 'Grape',
})

const gym2 = new Gym({
    name: 'Golds gym',
})


const ashley = new User({
    name: 'Ashley',
})

const orange = new Food({
    name: 'Fruit:Orange',
})

const gym3 = new Gym({
    name: 'Gym:LA Fitness',
})

        
User.remove()
.then(() => {
    bleu.food.push(apple)
    bleu.gym.push(gym1)
    return bleu.save()
}).then(() =>{
    tony.food.push(grape)
    tony.gym.push(gym2)
    return tony.save()
}).then(() =>{
    ashley.food.push(orange)
    ashley.gym.push(gym3)
    return ashley.save()
}).then((users) => {
    console.log(users)
    console.log('Saved User')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})