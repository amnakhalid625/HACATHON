const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbConnection;
