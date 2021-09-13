
// PARA BAIXAR AS DEPENDÊNCIAS EXECUTE O COMANDO npm install NO NODE

// Mysql com express 

var email = "test@gmail.com";

var senha = "1234";

const express = require('express');

const serv = express();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Inserir valores no banco de dados

// connection.query(`INSERT into usuario (email, senha) VALUES ('${email}',${senha})`, function(err, result) {
//     if (!err) {
//         console.log("Usuário cadastrado");
//     }
//     else {
//         console.log("Erro ao realizar cadastro");
//     }
// })

// Alterar valores no banco de dados

connection.query("UPDATE usuario SET senha = 54321 WHERE id = 1", function(err, result) {
    if (!err) {
        console.log("Usuário alterado");
    }
    else {
        console.log("Erro ao alterar usuario: " + err);
    }
})

// serv.get("/", function (req, res) {
//     res.sendFile(__dirname + "/site/index.html")
// });

serv.listen(3000, console.log("Server working"))

// Mysql com sequelize

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('site', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

// sequelize.authenticate().then(function() {
//     console.log("Connection on")
// }).catch(function(err) {
//     console.log("Error on connection: " + err)
// })
