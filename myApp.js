var express = require('express');
var app = express();

console.log("Hello World");
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
})
app.get('/json', (req,res) => {
    res.json({"message": "Hello json"});
})
let static1 = express.static(__dirname + "/public");
app.use("/public",static1);




































 module.exports = app;
