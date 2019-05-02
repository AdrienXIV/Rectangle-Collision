var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.send('index.html', {root: __dirname});
});

app.listen(3000, (error)=>{
    if(error) throw error;
    else console.log('Serveur lancé sur le port 3000');
});