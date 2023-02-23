const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  friendRequestReceived: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ],
  friendRequestSent: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  gender: {
    type: String,
    default: "",
  },
  birthday: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  phonenumbers: {
    type: String,
    default: "+0000000000",
  },
  lastActiveAt: {
    type: Date,
  },
});

module.exports = mongoose.model("User", UserSchema);
