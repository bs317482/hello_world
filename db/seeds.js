const User = require('../models/User')

const mongoose = require('mongoose')

// connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect("mongodb://localhost/regifter")
}

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})


User.remove({})
    .then(() => {
        const bobLoblaw = new User({
            fullName: 'bob_loblaw',
            food: 'bob@loblawlawblog.com',
            gym: 'Robert',
            weight: 'Loblaw',
            email: 'bob@loblawlawblog.com'
        })
    })