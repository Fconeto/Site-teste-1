const express = require('express');
const serv = express();
const bodyParser = require('body-parser');
const path = require('path');

serv.use(bodyParser.urlencoded());

serv.use("/exemplo", express.static(path.join(__dirname, "src")));

serv.listen(3000, console.log("Servidor rodando"));