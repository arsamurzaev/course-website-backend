const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({

  image:[],
  video:[],
  name: String,
  price: Number,
  description: String,
  location: String,
  isOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
