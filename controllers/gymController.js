const express = require('express')
const router = express.Router({ mergeParams: true })

const userModel = require("../models/user")
const foodModel = require("../models/food")
const gymModel = require("../models/gym")


router.post('/', (req, res) => {
    const userId = req.params.id
    const foodId = req.params.foodsId
    const newgym = req.body
    console.log('Req body new gym: ', req.body)

    userModel.findById(userId)
        .then((users) => {
            const newgym = new gymModel({
                name: req.body.name,
            })
            const food = users.foods.id(foodId)
            food.gyms.push(newgym)
            return users.save()
        })
        .then((savedgym) => {
            res.redirect(`/users/${userId}/foods/${req.params.foodsId}`)
        })
})

router.get('/new', (req, res) => {
    const userId = req.params.id
    const foodId = req.params.foodsId
    const gymId = req.params.gymsId
    userModel.findById(userId)
        .then((users) => {
            res.render('gyms/new', {
                foodId,
                userId,
                gymId,
            })
        })
})

router.get('/:gymId/edit', (req, res) => {
    const userId = req.params.id
    const foodId = req.params.foodsId
    const gymsId = req.params.gymId

    userModel.findById(userId)
        .then((users) => {
            const food = users.foods.id(foodId)
            const gym = food.gyms.id(gymsId)
            res.render('gyms/edit', {
                users,
                food,
                gym,
                userId,
                gymsId,
                foodId
            })
        })
})
router.put('/:gymId', (req, res) => {
    const userId = req.params.id
    console.log(userId)
    const foodId = req.params.foodsId
    const gymsId = req.params.gymId

    userModel.findByIdAndUpdate(userId)
        .then((users) => {
            console.log("users", users)
            console.log("REQUEST BODY", req.body)
            const food = users.foods.id(foodId)
            const gym = food.gyms.id(gymsId)
            gym.name = req.body.name

            return users.save()
        }).then((updatedUser) => {
            res.redirect(`/users/${userId}/foods/${req.params.foodsId}/gyms/${req.params.gymId}`)
        })
})

router.get('/:gymId', (req, res) => {
    const userId = req.params.id
    const foodsId = req.params.foodsId
    const gymId = req.params.gymId

    userModel.findById(userId)
        .then((users) => {
            console.log(users)
            const food = users.foods.id(foodsId)
            const gym = food.gyms.id(gymId)
            res.render('gyms/details', {
                foodsId,
                gymId,
                userId,
                users,
                food,
                gym
            })
        })
})


module.exports = router