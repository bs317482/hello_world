require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI); 



var users = require('./routes/users')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// // log
// // app.use(logger('dev'));
// // app.use(bodyParser.urlencoded({
// //   extended: true
// // }))
// // app.use(methodOverride('_method'));


// /*Views*/
// // app.set('view engine', 'hbs');

// /* HOME */
// app.get('/', function (req, res) {
//   res.send('Welcome to NutritiousNard Health and Fitness');
//  });

// app.use('/users', userRoutes)


// // Start server
// app.listen(port, function () {
//   console.info('Server Up -- Ready to serve cold todos on port', port, "//", new Date());
// });
