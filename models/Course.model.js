const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  // Модель Курсов
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
