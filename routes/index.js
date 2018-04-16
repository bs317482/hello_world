var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Get Fit' });
});

// get to create page
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Are You Fit?' });
});

module.exports = router;
