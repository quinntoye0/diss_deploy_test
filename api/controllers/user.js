// imports relevant models being accessed by this controller
const User = require("../models/User");
const argon2 = require('argon2');

// function to create new user
exports.createAccount = async (req, res) => {
    try {
        let user = new User({email: req.body.email, password: req.body.password});
        await user.save();
        res.redirect(`http://localhost:3000/sign-in`);
    } catch (e) {
        if (e.errors){
            console.log(e.errors);
            return res.render('create-account', {errors: e.errors});
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
};

// function to authenticate user login
exports.signIn = async (req, res) => {
  console.log('before try')
  try{
    console.log('in try')
    let user = await User.findOne({email: req.body.email})
    console.log('after find')
    console.log(user)
    const passMatch = await argon2.verify(user.password, req.body.password);
    console.log('after verify')

    if (passMatch) {
      console.log('before session set')
      req.session.userID = user._id;  // the user is logged as the session user
      console.log(req.session.userID);  // session userID is logged to console
      res.redirect(`http://localhost:3000/logged-in`);  // user is redirected to homepage, now logged in
      return
    } else {
      res.redirect(`http://localhost:3000/sign-in`);
    }
  }
  catch(e){
    res.json('error: exist issue')
  }
};