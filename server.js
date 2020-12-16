// Dependencies
const express = require('express');
const PORT = process.env.PORT || 8000;

//Test
const dbJson = require('./db/db.json')

// begin Express App
const app = express();

//Accesses public file mainly for CSS
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the Routes.js files to communicate to html
require("./apiRoutes")(app);
require("./htmlRoutes")(app);


// Commence Server Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});