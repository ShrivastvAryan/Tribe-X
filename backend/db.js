const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDB=async()=>{
    try {
        await mongoose.connect(URI) 
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;