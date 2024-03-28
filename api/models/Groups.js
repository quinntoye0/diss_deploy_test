const mongoose = require("mongoose");
const { Schema } = mongoose;

// const userSchema = new mongoose.Schema(
//     {
//         // sets names of each field along with their types and any requirements to be met (required field/min length etc) with a relevant message to accompany it 
//         email: { type: String, required: [true, 'email is required'], unique: true },
//         password: { type: String, required: [true, 'password is required'] }
//     },
//     { timestamps: true }
// );

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
          required: true,
        },
      ],
        
  },
  { timestamps: true }
);

// exports object
module.exports = mongoose.model("Group", groupSchema);
