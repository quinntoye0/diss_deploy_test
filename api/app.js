var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const expressSession = require('express-session')
app.use(expressSession({ secret: 'thisisthesecretkey', cookie: { expires: new Date(253402300000000) } }))

// MONGODB CONNECTION
const connectionString = 'mongodb+srv://quinntoye04:mongoquinntoye123@anonymitywebapp.hs3qlpt.mongodb.net/db_anonymity_web_app?retryWrites=true&w=majority&appName=AnonymityWebApp'
mongoose.connect(connectionString)
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running."
  );
  process.exit();
});


// IMPORTING MONGODB CONTROLLERS
const user = require('./controllers/user')
// GET/POST REQUESTS (Database functions)
app.post('/create-account', user.createAccount);
app.post('/sign-in', user.signIn)


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
