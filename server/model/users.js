const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isTrial: {
        type: Boolean,
        default: true
    },
    trialStartDate: Date,
    trialEndDate: Date,
    subscriptionEndDate: Date
}, { timestamps: true })

const User = mongoose.model('User', schema)

module.exports = User
