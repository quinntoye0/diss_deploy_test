// imports relevant models being accessed by this controller
const Group = require("../models/Group");
const User = require("../models/User");
const crypto = require('crypto');

// function to create new group
exports.createGroup = async (req, res) => {
    try {
        let group = new Group({
            name: req.body.group_name, 
            goal: req.body.group_goal, 
            desc: req.body.group_desc,
            join_code: generateJoinCode(),
            members: [req.body.current_user],
            messages: []
        });
        await group.save();
        res.status(200);
    } catch (e) {
        if (e.errors){
            console.log(e.errors);
            return res.render('create-group', {errors: e.errors});
        }
        return res.status(400).send({message: JSON.parse(e)}) 
    }
};
// function to generate join code for new groups
function generateJoinCode() {
    return crypto.randomBytes(6).toString('hex').toUpperCase();
}

// function to retrieve all groups an individual user has joined
exports.retrieveUserGroups = async (req, res) => {
    try {    
        const authHeader = req.headers.authorization;
        const userID = authHeader && authHeader.split(' ')[1];
        const groups = await Group.find({ members: { $in: [userID] } });
        res.json(groups);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve groups' });
      }
};

// function to retrieve a singular group by groupID
exports.retrieveGroup = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const groupID = authHeader && authHeader.split(' ')[1];
        let group = await Group.findOne({_id: groupID})
        res.json(group);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve group' });
    }
};

exports.addUserToGroup = async (req, res) => {
    try {
        const join_code = req.body.join_code;
        const userID = req.body.userID;

        await Group.findOneAndUpdate(
            { join_code: join_code },
            { $push: { members: userID } }
        )
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve groups' });
    }
}

exports.newMessage = async (req, res) => {
    try {

        let message = {
            content: req.body.message_content,
            votes: 0,
        };
        const groupID = req.body.groupID;

        Group.findById(groupID)
            .then(group => {
                group.messages.push(message);
                group.save();
            })  
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve groups' });
    }
}

exports.messageVote = async (req, res) => {
    try {
        const groupID = req.body.groupID;
        const messageID = req.body.messageID;

        await Group.findOneAndUpdate(
            { _id: groupID, "messages._id": messageID },
            { $inc: { "messages.$.votes": 1 } }
        )
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update message votes' });
    }
}


