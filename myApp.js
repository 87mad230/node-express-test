var express = require('express');
var app = express();


app.get('/json', (req,res) => {
    const style = process.env.MESSAGE_STYLE;
    if (style === "uppercase") 
        res.json({"message": "HELLO JSON"});
    else {
        res.json({"message": "Hello json"});
    }
})





































 module.exports = app;
