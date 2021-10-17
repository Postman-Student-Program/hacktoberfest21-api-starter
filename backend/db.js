const mongoose = require("mongoose");
const db =
  "mongodb+srv://admin:admin@halloweenpostman.yojhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//this because the new norm is using async await promises, since they look synchronous, even though in reality its async
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
