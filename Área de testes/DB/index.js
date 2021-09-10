const express = require('express');

const serv = express();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'site'
  });

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM cadastro', function(err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    }
    else {
        console.log('Erro ao realizar a consulta');
    }
})

serv.get("/", function (req, res) {
    res.sendFile(__dirname + "/site/index.html")
});

serv.listen(3000, console.log("Server working"))