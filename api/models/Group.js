const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

const messageSchema = new Schema({
  content: { type: String }, // Message content
  upvotes: { type: Number, default: 0 }, // Upvote tally starting at 0
});

// initialises schema for creation of new user objects 
const groupSchema = new Schema(
  {
    // sets names of each field along with their types and any requirements to be met (required field/min length etc) with a relevant message to accompany it 
      name: { type: String, required: [true, 'group name is required'] },
      goal: { type: String, required: [true, 'goal is required'] },
      desc: { type: String, required: [true, 'group description is required'] },
      join_code: { type: String, required: [true, 'join code is required'] },
      members: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference the User model
          required: [true, 'group members are required'],
        },
      ],
      messages: [messageSchema],
  },
  { timestamps: true }
);

// exports object
module.exports = mongoose.model("Group", groupSchema);
