// Admin related logic

const user = require('../models/user')

// /admin/addUser
exports.addUser = (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const cgpa = req.body.cgpa
    const branch = req.body.branch

    const user = new user(this.username, this.email, this.cgpa, this.branch)
    user.save()
}