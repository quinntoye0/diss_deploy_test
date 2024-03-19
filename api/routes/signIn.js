const User = require("../models/User");
const argon2 = require('argon2');
// const app = require('../app');
const cors = require('cors');


var express = require('express');
var router = express.Router();


router.get('/sign-in', cors(), (req,res)=>{
  res.render('/sign-in')
})

router.post('/sign-in', async(req, res)=>{

  try{
    const user =await User.findOne({email: req.body.email})
    const passMatch = await argon2.verify(req.body.password, user.password);

    if (passMatch) {
      req.session.userID = user._id;  // the user is logged as the session user
      console.log(req.session.userID);  // session userID is logged to console
      res.redirect('/logged-in');  // user is redirected to homepage, now logged in
      return
    }
  }
  catch(e){
    res.json('error: exist')
  }
})

module.exports = router;
