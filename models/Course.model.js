const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  image: [],
  video: [],
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, default: "" },
  online: { type: Boolean, default: true },
  isOwner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    default: null,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
