
const express = require("express");
const serv = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  })

module.exports = connection;