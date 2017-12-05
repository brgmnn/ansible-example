var express = require('express')
var fs = require('fs');
var app = express()

var html = fs.readFileSync('./hello-world.html')

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
})

app.listen(3000, function () {
  console.log('Node app listening on port 3000! Running node', process.version)
})
