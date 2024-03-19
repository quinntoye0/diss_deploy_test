const User = require("../models/User");
// const app = require('../app');
const cors = require('cors');

var express = require('express');
var router = express.Router();

router.get('/create-account', cors(), (req,res)=>{
    res.render('/create-account')
})
  
router.post('/create-account', async(req, res)=>{
    try {
        let user = new User({email: req.body.email, password: req.body.password});
        await user.save();
        res.redirect('/sign-in');
    } catch (e) {
        if (e.errors){
            console.log(e.errors);
            return res.render('create-account', {errors: e.errors});
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
})

module.exports = router;
