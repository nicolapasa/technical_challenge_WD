var express = require('express');
var app = express();
var fs = require("fs");
require("dotenv").config();
const cors = require("cors");

const FRONTEND_URL =  "http://127.0.0.1:5173";
app.set("trust proxy", 1);

// controls a very specific header to pass headers from the frontend
app.use(
  cors({
    origin: [FRONTEND_URL]
  })
);
app.get('/phones', function (req, res) {
   fs.readFile( __dirname + "/data/" + "phones.json", 'utf8', function (err, data) {
      console.log( data );
      console.log(err)
      res.status(201).json( JSON.parse(data) );
   });
})

app.get('/phones/:id', function (req, res) {
    fs.readFile( __dirname + "/data/" + "phones.json", 'utf8', function (err, data) {
        var phones = JSON.parse( data );
      var phone = phones[req.params.id] 
      console.log( phone );
      res.status(201).json( phone );
    });
 })

var server = app.listen(8081, function () {
   var host = server.address('http://localhost').address
   var port = server.address(8081).port
   console.log(`Server listening on http://localhost:${port}`);
})