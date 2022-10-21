const router = require('express').Router()
const adminController = require('../controllers/admin')

router.post('/addNewJob', adminController.addNewJob)

module.exports = router