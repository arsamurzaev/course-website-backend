const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json("Ошибка при авторизации");

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") return res.status(400).json("Неправильный тип токена");

  try {
    req.user = await jwt.verify(token, process.env.JWT_TOKEN);

    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
