var express = require('express');
var app = express();


const nameHandler = (req,res) => {
    res.json({'name':`${req.query.first} ${req.query.last}`});
}

app.route('/name').get(nameHandler).post(nameHandler);































 module.exports = app;
