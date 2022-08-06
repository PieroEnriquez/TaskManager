const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = (url) => {
    return mongoose.connect(process.env.DB_CONNECTION);
}

module.exports = connectDB;
