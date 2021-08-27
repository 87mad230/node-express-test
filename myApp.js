var express = require('express');
var app = express();

app.get('/now', (req,res, next) => {
    let time = new Date().toString();
    next();
}, (req,res) => {
    res.json({'time': time});
})




































 module.exports = app;
