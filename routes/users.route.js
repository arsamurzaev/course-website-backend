const { usersController } = require("../controllers/users.controller");
const { Router } = require("express");
const authMiddlewares = require("../models/middlewares/auth.middlewares");

// написать роуты для пользователей
const router = Router();

// вывод всех юзеров
router.get("/users", authMiddlewares, usersController.getAllUsers);
//вывод юзера по айди
router.get("/users/:id", authMiddlewares, usersController.getUserById);
//добавление юзеров
router.post("/register", usersController.registerUser);
//запрос на неверный или верный логин
router.post("/login", usersController.login);
//удаление юзера
router.delete("/users/:id", usersController.deleteUser);
module.exports = router;
