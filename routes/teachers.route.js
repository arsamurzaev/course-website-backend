const { teachersController } = require('../controllers/teachers.controller');
const { Router } = require("express");

// написать роуты для преподователей
const router = Router();

//вывод учителя
router.get('/teachers', teachersController.getAllTeachers);
//добавление учителя
router.post('/teachers', teachersController.createTeachers);
//удаление учителя
router.delete('/teachers', teachersController.deleteTeachers);

module.exports = router;