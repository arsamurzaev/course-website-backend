const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  image: Array,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, default: "" },
  social: String,
  tags: Array,
  online: { type: Boolean, default: true },
  category: { type: String, required: true },
  isOwner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    default: null,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
