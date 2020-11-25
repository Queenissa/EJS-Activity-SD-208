const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    email: {type: String, required: false},
    address: {type: String, required: false},
    password: {type: String, required: false}

})

module.exports = mongoose.model('Users', UserSchema)