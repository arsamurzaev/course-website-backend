const { coursesController } = require("../controllers/courses.controller");
const { Router } = require("express");
const fileMiddleware = require("../middlewares/file.middleware");

// написать роуты для курсов
const router = Router();

//вывод курса
router.get("/courses", coursesController.getAllCourses);
//вывод определенного курса
router.get("/course/:id", coursesController.getCourseById);
//добавление курса
router.post("/course", coursesController.createCourse);
//удаление курса
router.delete("/course/:id", coursesController.deleteCourse);
// 
router.post(
    "/upload-multiple",
    fileMiddleware.array("myFiles", 5),
    (req, res) => {
      try {
        const files = req.files;
        if (!files) {
          return res.status(400).json("Пожалуйста загрузите файлы");
        }
        res.send(files);
      } catch (error) {
        res.json({ error: error.message });
      }
    }
  );

module.exports = router;
