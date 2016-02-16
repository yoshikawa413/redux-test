var fs = require('fs')
var http = require('http')
var express = require('express')

var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function(req, res, next) {
  res.json({ 'foo': 'bar' });
});

http.createServer(app).listen(3000)