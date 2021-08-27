var express = require('express');
var app = express();


app.get('/json', (req,res) => {
    const style = process.env.MESSAGE_STYLE;
    res.send(style);
})





































 module.exports = app;
