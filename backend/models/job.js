const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    companyName: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        require: true
    }
}, {timestamps: true})

module.exports = new mongoose.model('Job', jobSchema)