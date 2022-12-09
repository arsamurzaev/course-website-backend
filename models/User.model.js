const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickname: { type: String, default: "user" },
  avatar: String,
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  email: { type: String, default: "" },
  description: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
