// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res,) {
//   res.send('User');
// });


// module.exports = router;

var express = require('express')
const router = express.Router()

var data = require('../data')

router.get('/', function (req, res) {
  
    res.render('todos/index', {
        todos: data.seededTodos
    });
});

router.get('/new', function (req, res) {
    res.render('todos/new')
})

router.get('/:id', function (req, res) {
    let id = req.params.id
    let todo = data.seededTodos[id]
    console.log(todo)

    res.render('todos/show', {
        todo: todo
    })
})

router.post('/', function (req, res) {
    data.seededTodos.push(req.body)
    res.redirect('/todos')
})

router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos'); 
});

router.get('/:id/edit', function(req, res){
const id =req.params.id
const todos = data.seededTodos

    res.render('todos/edit', {
      todo: {
        id: id,
        description: todos[id].description,
        urgent: todos[id].urgent,
      }
    });
  });

  router.put('/:id', function(req, res) {
    var todoToEdit = data.seededTodos[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/todos');
  })

module.exports = router
