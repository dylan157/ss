const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)