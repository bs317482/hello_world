const express = require('express')
const router = express.Router({ mergeParams: true })

const foodModel = require("../models/food")
const userModel = require("../models/user")

//POST New food
router.post('/', (req, res) => {
    console.log(req.params.id)
    const userId = req.params.id
    const newFood = req.body

    userModel.findById(userId)
        .then((users) => {
            const newFood = new foodModel({
                name: req.body.name,
                location: req.body.location,
                rating: req.body.rating
            })

            users.foods.push(newfood)
            return users.save()
        }).then((updatedUser) => {
            res.redirect(`/users/${req.params.id}/`)
        })
})

//GET New food 
router.get('/new', (req, res) => {
    const userId = req.params.id
    userModel.findById(userId)
    res.render('foods/new', {
        userId
    })
})

// DELETE food
router.delete('/:foodsId', (req, res) => {
    const userId = req.params.id
    userModel.findById(userId)
        .then((user) => {
            user.foods.id(req.params.foodsId).remove()
            return user.save()
        }).then(() => {
            res.redirect(`/users/${req.params.id}/`)
        })
        .catch((err) => {
            console.log(err)
        })
})

//GET Specific food Page
router.get('/:foodsId', (req, res) => {
    const userId = req.params.id
    const foodsId = req.params.foodsId
    console.log('SHOW ROUTE HIT')
    userModel.findById(req.params.id)
        .then((users) => {
            console.log(users)
            const food = users.foods.id(req.params.foodsId)
            res.render('foods/details', {
                foodsId,
                userId,
                users,
                food
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router