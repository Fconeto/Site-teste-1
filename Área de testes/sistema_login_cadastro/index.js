
// PARA BAIXAR AS DEPENDÊNCIAS EXECUTE O COMANDO npm install NO NODE.JS
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
var db = require("./db/db");

const PORT = 3000;
var path = require("path");
const app = express();

app.use(session({secret: "asdfgh"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/test", express.static(path.join(__dirname, "test")));
app.set("views", path.join(__dirname, "/views"));


// Recebe as informações enviadas pelo formulário e verifica se existem no banco de dados
app.post("/",(req, res) => {
    var login = req.body.login;
    var senha = req.body.password;
    db.query(`SELECT email, senha FROM usuario where email = "${login}" && senha = ${senha};`, function(err, result) {
        if (!err && result.length > 0) {
            req.body.login == login;
            res.render('logado', {login: req.body.login});
            console.log("O usuário logado é: " + req.body.login);
        }
        else {
            console.log("Erro ao buscar usuários");
            console.log("Usuário inválido: " + login + " " + senha);
            res.render('index');
        }
    })
})

// Cadastra um novo usuário no banco de dados
app.post("/cadastro", (req, res) => {
    var login = req.body.login;
    var senha = req.body.password;
    if (login.length > 0 && senha.length > 0) {
    db.query(`SELECT email FROM usuario where email = "${login}";`, function(err, result) {
        if (!err && result.length > 0) {
            console.log("Usuário já está cadastrado");
            res.render('cadastro');
        }
        else {
                db.query(`INSERT INTO usuario VALUES (default, "${login}", "${senha}")`)
                console.log("Usuário: " + login + " " + senha + " cadastrado com sucesso")
                res.render('cadastro');
        }
    })      
    }   
    else {
                console.log("Preencha todos os campos")
                res.render('cadastro');
            }
})

app.get("/", (req, res) => {
    if(req.session.login){
        res.render('logado', {login: req.body.login});
    }
    else {
        res.render('index');
    }
})

app.get("/cadastro", (req, res) => {
    res.render('cadastro');
})

app.listen(PORT, () => {console.log("Servidor rodando")})

