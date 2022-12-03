const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({

});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
