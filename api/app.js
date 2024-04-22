var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// app.use(cors());
// app.options("*", cors());

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

// const corsOptions = {
//   origin: 'https://diss-deploy-test-client.vercel.app',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
//   optionsSuccessStatus: 200,  
// };

// app.use(cors(corsOptions));

// export const AuthRouter = () => {
//   const router = express.Router();
//   // Auth
//   router.use('/', express.json());
//   router.use('/', express.urlencoded({ extended: true }));

//   router.use('/signin', cors(corsOptions));
//   router.post('/signin', AuthController.signIn);
//   return router;
// };


// app.use(allowCors(handler));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'https://diss-deploy-test-client.vercel.app/');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.options((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', "*");
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

app.use(express.json())
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


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

// SESSION ALTERATIONS (Create/Destroy/Check)

const jwt = require('jsonwebtoken');

function isLoggedIn(req) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
      const decoded = jwt.verify(token, 'thisisthesecretkey');
      return decoded; // Return user data if valid
    }
  } catch (error) {
    console.error('JWT verification error:', error);
  }
  return null; // Not logged in
}

app.post('/is-logged-in', allowCors((req, res) => {
  const isUserLoggedIn = isLoggedIn(req);
  if (isUserLoggedIn) {
    const userID = isUserLoggedIn.payload;
    res.json({ isLoggedIn: true,  userID }); // Send user data if logged in
  } else {
    res.json({ isLoggedIn: false }); // Send status if not logged in
  }
}));

// IMPORTING MONGODB CONTROLLERS
const user = require('./controllers/user')
const group = require('./controllers/group')
// GET/POST REQUESTS (Database functions)
app.post('/create-account', allowCors(user.createAccount));
app.post('/sign-in', allowCors(user.signIn))
app.post('/create-group', allowCors(group.createGroup))
app.post('/retrieve-user-groups', allowCors(group.retrieveUserGroups))
app.post('/retrieve-group', allowCors(group.retrieveGroup))
app.post('/add-user-to-group', allowCors(group.addUserToGroup))
app.post('/new-message', allowCors(group.newMessage))
app.post('/group-message-vote', allowCors(group.messageVote))

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

// app.listen(3001, () => {
//   console.log("API Running")
// })

module.exports = allowCors(app);
