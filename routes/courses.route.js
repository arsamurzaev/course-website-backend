const { coursesController } = require("../controllers/courses.controller");
const { Router } = require("express");
const authMiddlewares = require("../models/middlewares/auth.middlewares");

// написать роуты для курсов
const router = Router();

//вывод курса
router.get("/courses", coursesController.getAllCourses);
//вывод определенного курса
router.get("/course/:id", coursesController.getCourseById);
//добавление курса
router.post("/course", authMiddlewares, coursesController.createCourse);
//удаление курса
router.delete("/course/:id", authMiddlewares, coursesController.deleteCourse);

module.exports = router;
