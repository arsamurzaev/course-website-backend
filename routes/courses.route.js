const { coursesController } = require('../controllers/courses.controller');
const { Router } = require("express");

// написать роуты для курсов
const router = Router();

//вывод курса
router.get('/courses', coursesController.getAllCourses);
//добавление курса
router.post('/cours', coursesController.createCours);
//удаление курса
router.delete('/cours:id', coursesController.deleteCours);

module.exports = router;