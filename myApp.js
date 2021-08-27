var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static(__dirname+'/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname+"/views/index.html");
})
app.post('/name', (req,res) => {
    res.json({'name':`${req.body.first} ${req.body.last}`});
})




























 module.exports = app;
