const mongoose = require("mongoose");
const { Schema } = mongoose;
const argon2 = require('argon2');

// initialises schema for creation of new user objects 
const userSchema = new Schema(
  {
    // sets names of each field along with their types and any requirements to be met (required field/min length etc) with a relevant message to accompany it 
      email: { type: String, required: [true, 'email is required'], unique: true },
      password: { type: String, required: [true, 'password is required'] }
  },
  { timestamps: true }
);

// password hashing attempted before data saved to db
userSchema.pre('save', async function (next) {
  try {
      const hash = await argon2.hash(this.password, 10);
      this.password = hash;
      next();
  } catch (e) {
      throw Error('could not hash password');
  }
})
// exports object
module.exports = mongoose.model("User", userSchema);