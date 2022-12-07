const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  // реализовать получение юзера по айди
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // реализовать создание юзера
  registerUser: async (req, res) => {
    try {
      // В том же постмане мы отправляем req, содержащий эти значения
      // все эти значения есть в моделях, но для req надо указать те, которые поддаются правке
      const { nickname, login, password } = req.body;
      // Тут уже создается переменная, которая будет содержать данные с req

      const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_HASH));

      const user = await User.create({
        nickname,
        login,
        password: hash,
      });
      res.status(200).json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { password, login } = req.body;
      const candidate = await User.findOne({ login });

      const payload = {
        id: candidate._id,
        nickname: candidate.nickname,
        login: candidate.nickname,
        role: candidate.role,
        description: candidate.description,
      };

      const token = await jwt.sign(payload, process.env.JWT_TOKEN, {
        expiresIn: "24h",
      });

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid || !candidate)
        return res.json("Неправильный логин или пароль");

      res.json(token);
      console.log(token);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // реализовать удаление аккаунта
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
