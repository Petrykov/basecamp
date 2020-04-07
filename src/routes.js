const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const app = express();


let requestNum =0;

// app.use(bodyParser.json({type:'application/json'}));
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(cors());

const connection = mysql.createPool({
    host:'84.81.136.26',
    user:'monty',
    password:'some_pass',
    database:'KekistanDB'
  });

app.get('/cannon', function (req, res) {
  requestNum++;
  console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
      
      if(err) throw err;

        connection.query('SELECT * FROM Cannon', function (error, results, fields) {
          if (error){
            throw error;
          } else{
            console.log('success');
            res.send(results);
          } 
    });

  });
});

app.get('/item', function (req, res) {
  requestNum++;
  console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
      if(err) throw err;
        connection.query('SELECT * FROM Item', function (error, results, fields) {
          if (error){
            throw error;
          } else{
            console.log('success');
            res.send(results);
          } 
    });
  });
});

app.get('/pedestrian', function (req, res) {
  requestNum++;
  console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
      if(err) throw err;
        connection.query('SELECT * FROM Pedestrian', function (error, results, fields) {
          if (error){
            throw error;
          } else{
            console.log('success');
            res.send(results);
          } 
    });
  });
});

app.get('/ray', function (req, res) {
  requestNum++;
  console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
      if(err) throw err;
        connection.query('SELECT * FROM Ray', function (error, results, fields) {
          if (error){
            throw error;
          } else{
            console.log('success');
            res.send(results);
          } 
    });
  });
});

app.get('/wagon', function (req, res) {
  requestNum++;
  console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
      if(err) throw err;
        connection.query('SELECT * FROM Wagon', function (error, results, fields) {
          if (error){
            throw error;
          } else{
            console.log('success');
            res.send(results);
          } 
    });
  });
});


// Starting our server.
app.listen(3000, () => {
 console.log('app.listen 3000');
});
