const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickname: { type: String },
  login: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: "user" },
  description: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
