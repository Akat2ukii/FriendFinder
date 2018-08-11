//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up Express
var app = express();
var PORT = process.env.PORT || 3000;

//Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Require routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  