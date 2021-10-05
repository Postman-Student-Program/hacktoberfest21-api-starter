const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  host = process.env.HOST || "http://localhost",
  contestants = require("./routes/contestants");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).send({ status: "ok" });
});

app.use("/contestants", contestants);

app.listen(port, () => console.log(`Server listening on port ${host}:${port}`));
