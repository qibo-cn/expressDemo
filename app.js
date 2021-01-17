var express = require("express");
var app = express();

app.get("/index", (req, response) => {
    response.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/article", (req, response) => {
    response.sendFile(__dirname + "/views/article.html");
});

app.listen(3000);
