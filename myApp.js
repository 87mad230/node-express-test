var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.post('/json', (req,res) => {
    res.json({'name': req.query.name});
})



























 module.exports = app;
