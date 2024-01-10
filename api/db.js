
const dotenv = require('dotenv');  
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URL);
        console.log('Mongo connected');
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;