const express = require('express')
const router = express.Router()

const userModel = require("../models/user")

router.delete('/:userId', (req, res) => {
    userModel.findByIdAndRemove(req.params.userId)
        .then(() => {
            res.redirect('/users')
        })
})
router.post('/', (req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        age: req.body.age,
        
    })
    newUser.save()
        .then((savedUser) => {
            res.redirect('/users')
        })
})
router.get('/new', (req, res) => {
    res.render('users/new')
})
router.get('/', (req, res) => {
    userModel.find({})
        .then((users) => {
            res.render('users/index', {
                users
            })
        })
        
})

router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    userModel.findById(req.params.userId)
        .then((users) => {
            console.log("USERS")
            res.render('users/details', {
                users,
                userId
            })
        })
        .catch((err) => {
            console.log(err)
        })
})
router.get('/:userId/edit', (req, res) => {
    userModel.findById(req.params.userId)
        .then((users) => {
            res.render('users/edit', {
                users
            })
        })
})
router.put('/:userId', (req, res) => {
    console.log(req.body)
    userModel.findByIdAndUpdate(req.params.userId, req.body)
        .then((users) => {
            console.log(users)
            res.redirect(`/users/${users.id}`)
        })
})

module.exports = router