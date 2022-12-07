require("dotenv").config();
const expess = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const app = expess();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(expess.json());
app.use(cors());
app.use(morgan("dev"));
app.use(require("./routes/index"));

const { MONGODB_SERVER, PORT } = process.env;

mongoose.connect(MONGODB_SERVER, (error) => {
  if (error)
    return console.log("Ошибка при соединение с сервером mongoDB: " + error);
  return console.log("Соединение с сервером mongoDB прошло успешно");
});

app.listen(PORT, (erorr) => {
  if (erorr) return console.log("Ошибка при соединение с сервером");
  return console.log(`Соединение с сервером прошло успешно на порте ${PORT}`);
});
