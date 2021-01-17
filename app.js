var express = require("express");
var app = express();
// 加载hbs模块
var hbs = require("hbs");
// 指定模板文件的后缀名为html
app.set("view engine", "html");

// 运行hbs模块
app.engine("html", hbs.__express);

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/article", function (req, res) {
    res.render("article");
});

app.listen(3000);
