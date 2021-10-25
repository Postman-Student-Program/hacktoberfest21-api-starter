const express = require("express"),
  app = express(),
  config = require("config"),
  mongoose = require("mongoose"),
  port = process.env.PORT || 3000,
  host = process.env.HOST || "http://localhost",
  contestants = require("./routes/contestants");
require("express-async-errors");

const mongoDBUri = config.get("DB_URI");
mongoose
  .connect(mongoDBUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).send({ status: "ok" });
});

app.use("/contestants", contestants);

app.use((err, req, res, next) => {
  console.log(err.message);
  return res
    .status(500)
    .send({ status: "error", message: "Something went wrong." });
});

app.listen(port, () => console.log(`Server listening on port ${host}:${port}`));
