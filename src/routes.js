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
    host:'localhost:3306',
    user:'monty',
    password:'some_pass',
    database:'KekistanDB'
  });

app.get('/', function (req, res) {
    requestNum++;
    console.log("reqeust #" + requestNum);
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM Messages', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('app.listen 3000');
});
