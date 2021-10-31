var express = require('express');
var router = express.Router();
var app = express();
const contestantRoute = require("./contestants.route");
const rootRoute = require("./root.route");

app.use("/contestants", contestantRoute);
app.use("/", rootRoute);

module.exports = app;