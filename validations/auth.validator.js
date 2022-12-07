const { body } = require("express-validator");

module.exports.registerValidator = [
  body("nickname").isLength({ min: 4 }),
  body("login").isLength({ min: 4 }),
  body("password").isLength({ min: 4 }),
];
