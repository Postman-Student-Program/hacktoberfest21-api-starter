const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;
//this because the new norm is using async await promises, since they look synchronous, even though in reality its async
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useMongooseClient: true
    });

    //There are even more properties of promise to this await, but we ll add them later

    console.log("MongoDB Connected....!");
  } catch (err) {
    console.log(err.message);
    //Exit the process with failure code ie 1
    process.exit(1);
  }
};

module.exports = connectDB;
