const { Router } = require("express");

const router = Router()

router.use(require('./users.route'))
router.use(require('./courses.route'))
// router.use(require('./teachers.route'))

module.exports = router