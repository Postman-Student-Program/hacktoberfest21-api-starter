const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  host = process.env.HOST || "http://localhost",
  contestants = require("./routes/contestants");
require("express-async-errors");
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
