var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const expressSession = require('express-session')
app.use(expressSession({ secret: 'thisisthesecretkey', cookie: { expires: new Date(253402300000000) } }))

// MONGODB CONNECTION
const connectionString = 'mongodb+srv://quinntoye04:mongoquinntoye123@anonymitywebapp.hs3qlpt.mongodb.net/?retryWrites=true&w=majority&appName=AnonymityWebApp'
mongoose.connect(connectionString)
// mongoose.connect('mongodb://localhost:27017/db_anonymity_web_app');
// If connected to MongoDB send a success message
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


// GET/POST REQUESTS
const user = require('./controllers/user')

app.post('/create-account', user.createAccount);
app.post('/sign-in', user.signIn)










// app.use('/', indexRouter);
// app.use('/sign-in', signInRouter);
// app.use('/create-account', createAccountRouter);
// // ######## TESTING API AND MONGODB SETUP #########
// app.use("/testAPI", testAPIRouter);
// app.use("/testDB", testDBRouter);

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
