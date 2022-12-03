const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // Модель юзера
});

const User = mongoose.model("User", userSchema);

module.exports = User;
