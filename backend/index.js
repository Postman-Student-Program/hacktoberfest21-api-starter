const express = require("express");
const connectDB = require("./db");

const app = express();

//Connect to DB
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "API UP & Running"
  });
});

app.use("/contestants", require("./contestants"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
