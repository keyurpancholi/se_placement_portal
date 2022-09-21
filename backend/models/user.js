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
  jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}]
})

module.exports =  mongoose.model('User', userSchema)