
const express = require("express");
const app = express();
let ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/shop", function(req, res) {
  res.render("shop");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
