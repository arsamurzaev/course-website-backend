require("dotenv").config();
const expess = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = expess();

app.use(expess.json());
app.use(cors());
app.use(morgan("dev"));

const { MONGODB_SERVER, PORT } = process.env;

mongoose.connect(MONGODB_SERVER, (error) => {
  if (error)
    return console.log("Ошибка при соединение с сервером mongoDB \n", +error);
  return console.log("Соединение с сервером mongoDB прошло успешно");
});

app.listen(PORT, (erorr) => {
  if (erorr) return console.log("Ошибка при соединение с сервером");
  return console.log(`Соединение с сервером прошло успешно на порте ${PORT}`);
});
