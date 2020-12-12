//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//Setup
let app = express();
let PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Server listening to Note-Taker on http://localhost:" + PORT);
})
