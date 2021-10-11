const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const app = express();

//routes
const contestantRoutes = require("./routes/contestant");

//middlewares
app.use(express.json());
app.use("", contestantRoutes);

//databaseConnection
env.config();
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("An error has occured", err));

app.listen(process.env.PORT || 2000, console.log("Server started"));
