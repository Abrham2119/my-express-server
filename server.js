//jshint esversions

var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello World!');

})

app.get('/about',function(req, res) {
    res.send('About me');
})

app.get('/contact',function(req, res) {
    res.send('my name is abrham  zewdu and contact me in abrhamzewdu@gmail.com ');
})

app.listen(3002, function() {
    console.log('Server is running on port 3002');
});


