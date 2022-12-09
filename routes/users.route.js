const { usersController } = require("../controllers/users.controller");
const { Router } = require("express");
// const authMiddlewares = require("../middlewares/auth.middleware");
const fileMiddleware = require("../middlewares/file.middleware");

// написать роуты для пользователей
const router = Router();

// вывод всех юзеров
router.get("/users", usersController.getAllUsers);
//вывод юзера по айди
router.get("/users/:id", usersController.getUserById);
//добавление юзеров
router.post("/register", usersController.registerUser);
//запрос на неверный или верный логин
router.post("/login", usersController.login);
// Запрос на измение юзера
router.patch("/users/:id", usersController.editUser)
//удаление юзера
router.delete("/users/:id", usersController.deleteUser);
// Добавление аватарки
router.post(
  "/users/uploadAvatar",
  fileMiddleware.single("avatar"),
  usersController.addAvatar
);
module.exports = router;
