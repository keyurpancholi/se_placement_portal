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
    }
})