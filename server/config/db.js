const mongoose = require('mongoose');


exports.DB_connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_ssigment')
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err);
    }
}

