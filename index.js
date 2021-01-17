var express = require("express");
var app = express();

var route = require("./routes")(app);

app.listen(3000);
