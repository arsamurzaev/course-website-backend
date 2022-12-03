const Course = require('../models/Course.model');

module.exports.coursesController = {
    // реализовать получение всех курсов
    getCourses: async(req, res) => {
        try {
            const courses = await Course.find();
            res.json(courses);            
        } catch (error) {
            res.json({error: error.message})
        }
    },
    // реализовать создание курса
    createCourse: async(req, res) => {
        try {
            const { image, price, description, location, ref } = req.body;
            const course = await Course.create({
                image, price, description, location, ref
            });
            res.status(200).json(course);
        } catch (error) { 
            res.json({error: error.message})
        }
    },
    // реализовать удаление курса
    deleteCourse: async()
}