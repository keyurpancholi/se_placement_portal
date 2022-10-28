const router = require('express').Router()
const adminController = require('../controllers/admin')
const isAdmin = require("../middleware/isAdmin")

router.post('/addNewJob', isAdmin, adminController.addNewJob)

router.post('/login', adminController.login)

router.put('/signup', adminController.signup)

module.exports = router