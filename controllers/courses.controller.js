const Course = require("../models/Course.model");

module.exports.coursesController = {
  // реализовать получение всех курсов
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // получение определенного курса
  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);

      res.status(200).json(course);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // реализовать создание курса по айди
  createCourse: async (req, res) => {
    try {
      const { name, price, description, location, isOwner } = req.body;
      const course = await Course.create({
        name,
        price,
        description,
        location,
        isOwner,
      });
      res.status(200).json(course);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // реализовать удаление курса
  deleteCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndRemove(req.params.id);
      res.status(200).json(course);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addImg: (req, res) => {
    try {
      const files = req.files;
      if (!files) {
        return res.status(400).json("Пожалуйста загрузите файлы");
      }
      res.json(files);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
