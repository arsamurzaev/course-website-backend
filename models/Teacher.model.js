const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  // Модель Преподавателя курсов
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
