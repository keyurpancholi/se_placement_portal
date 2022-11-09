const router = require('express').Router()
// const adminController = require('../controllers/admin')
const isAuth = require('../middleware/isAuth')
const admin = require('../controllers/admin-w-classes')
const adminController = new admin()

router.post('/addNewJob', isAuth, adminController.addNewJob)

router.post('/login', adminController.login)

router.put('/signup', adminController.signup)

module.exports = router