require('dotenv').config();
const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(`${__dirname}/public`))

//local host port
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`app listening on PORT ${PORT}`)
})

// Mongoose stuff
const mongoose = require('mongoose')
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/beer-reviews')
}
const db = mongoose.connection

db.on('error', function (err) {
    console.log(err)
})

db.once('open', function () {
    console.log('database has been connected!')
})

//controller routes
const userController = require('./controllers/userController.js')
app.use('/users', userController)

const foodController = require('./controllers/foodController.js')
app.use('/users/:id/foods', foodController)

const gymController = require('./controllers/gymController.js')
app.use('/users/:id/foods/:foodsId/gym', gymController)

app.get('/', function (req, res) {
    res.render('home/home')
})

app.get('*', function (req, res) {
    res.render('errors/fourohfours');
});