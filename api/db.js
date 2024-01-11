
const dotenv = require('dotenv');  
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log('Mongo connected');
    } catch(error) {
        console.log(error);
        process.exit();
    }
}
module.exports = connectDB;