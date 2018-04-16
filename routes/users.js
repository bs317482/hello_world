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

router.get('/', function (req, res) {
  
    res.render('views/index', {
        users: data.seededViews
    });
});

router.get('/new', function (req, res) {
    res.render('new')
})

router.get('/all', function(req,res) {
  res.render('views/allinfo')
})

router.get('/:id', function (req, res) {
    let id = req.params.id
    let todo = data.seededViews[id]
    console.log(bluechips)

    res.render('view/show', {
        views: views
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
