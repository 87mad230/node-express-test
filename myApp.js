var express = require('express');
var app = express();


const mdware = (req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}
app.use(mdware);




































 module.exports = app;
