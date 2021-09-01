const express = require("express");
const serv = express();
const bodyParser = require("body-parser");
const path = require("path");


const bd = require("./data-base/bd");
const rotas = require("./rotas/rotas")

serv.use(bodyParser.urlencoded());

serv.use("/welldome", express.static(path.join(__dirname, "Site")));



serv.listen(3000, () => console.log("Server rodando"))