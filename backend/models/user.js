const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    requied: true
  },
  password: {
    type: String, 
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  branch: {
    type: String, 
    required: true
  },
  jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}]
}, {timestamps: true})

module.exports =  mongoose.model('User', userSchema)