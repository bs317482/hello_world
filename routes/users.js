// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res,) {
//   res.send('User');
// });


// module.exports = router;

var express = require('express')
const router = express.Router()

// var data = require('../data')

const User = require('../models/User');
const Gym = require('../models/Gym');
const Food = require('../models/Food');

router.get('/', function (req, res) {
  User.find({})
  .then((users) => {
    res.render('index', {
      users: users
  });
  })
  
});

router.get('/new', function (req, res) {
    res.render('new')
})

router.get('/all', function(req,res) {
  res.render('views/allinfo')
})

router.get('/:id', function (req, res) {
    let id = req.params.id
    User.findById(id)
    .then((user) => {
      res.render('show', {
        user: user
    })
    })

    
})

router.post('/', function (req, res) {
    data.seededViews.push(req.body)
    res.redirect('/todos')
})

router.delete('/:id', function(req, res) {
    data.seededViews.splice(req.params.id, 1); 

    res.redirect('/views'); 
});

router.get('/:id/edit', function(req, res){
const id =req.params.id
const todos = data.seededViews

    res.render('views/edit', {
      views: {
        id: id,
        description: views[id].description,
        urgent: views[id].urgent,
      }
    });
  });

  router.put('/:id', function(req, res) {
    var viewsToEdit = data.seededViews[req.params.id];
  
    viewsToEdit.description = req.body.description;
    viewsToEdit.urgent = req.body.urgent;
  
    res.redirect('/views');
  })



module.exports = router
