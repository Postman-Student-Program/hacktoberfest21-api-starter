const router = require("./routes/index.route");
const express = require('express'),
    app = express();
app.use('/', router);


// Export the routes as the default
module.exports = app;

