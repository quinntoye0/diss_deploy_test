const User = require("../models/User");
const cors = require('cors');

var express = require('express');
var router = express.Router();

router.get('/create-account', cors(), (req,res)=>{
    res.render('/create-account')
})
  
router.post('/create-account', async(req, res)=>{
    console.log('before try')
    try {
        console.log('before user')
        let user = new User({email: req.body.email, password: req.body.password});
        console.log('before save')
        await user.save();
        console.log('before redirect')
        res.redirect('http://localhost:3000/sign-in');
        console.log('end')
    } catch (e) {
        console.log('catch')
        if (e.errors){
            console.log(e.errors);
            return res.render('create-account', {errors: e.errors});
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
})

module.exports = router;
