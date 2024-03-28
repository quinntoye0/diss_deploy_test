// imports relevant models being accessed by this controller
const Group = require("../models/Group");
const crypto = require('crypto');

// function to create new user
exports.createGroup = async (req, res) => {
    try {
        let group = new Group({
            name: req.body.group_name, 
            goal: req.body.group_goal, 
            desc: req.body.group_desc,
            join_code: generateJoinCode(),
            members: [req.body.currentUser]
        });
        await group.save();
        res.redirect(`http://localhost:3000/`);
    } catch (e) {
        if (e.errors){
            console.log(e.errors);
            return res.render('create-group', {errors: e.errors});
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
};

exports.retrieveUserGroups = async (req, res) => {
    try {
        const groups = await Group.find({ members: { $in: [userID] } });
        res.json(groups);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve groups' });
      }
};

function generateJoinCode() {
    return crypto.randomBytes(6).toString('hex').toUpperCase();
}
