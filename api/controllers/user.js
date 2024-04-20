// imports relevant models being accessed by this controller
const User = require("../models/User");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// function to create new user
exports.createAccount = async (req, res) => {
    try {
        let user = new User({
          email: req.body.email, 
          password: req.body.password
        });
        await user.save();
        res.status(200);
    } catch (e) {
        if (e.errors){
            console.log(e.errors);
            return res.status(400);
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
};

// function to authenticate user login
exports.signIn = async (req, res) => {
  try{
    let user = await User.findOne({email: req.body.email})
    const userID = user._id;
    const passMatch = await argon2.verify(user.password, req.body.password);

    if (passMatch) {
      const token = generateAccessToken(userID); // Generate JWT using user ID
      res.status(200).json({ token, userID });
      return
    } else {
      console.log('incorrect login details')
      res.status(400);
    }
  }
  catch(e){
    res.json('error: login issue')
  }
};

// uses user id to generate JSON Web Token for login accessibility control
function generateAccessToken(userId) {
  const payload = { userId };
  const secret = 'thisisthesecretkey';
  const options = { expiresIn: '30m' }; // Sets JWT expiration time
  return jwt.sign(payload, secret, options);
}
