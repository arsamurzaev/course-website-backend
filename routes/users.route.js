const { usersController } = require('../controllers/users.controller');
const { Router } = require("express");

// написать роуты для пользователей
const router = Router();

//вывод юсеров
router.get('/users', usersController.getAllUsers);
//добавление юсеров
router.post('/users', usersController.registerUser);
//запрос на неверный ил верный лгин
router.post('/login', usersController.login);
//удаление юсера
router.delete('users/:id', usersController.deleteUser);

module.exports = router;