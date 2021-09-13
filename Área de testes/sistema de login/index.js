const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const PORT = 3000;
var path = require("path");
const app = express();

var login = "administrador";
var password = "123456";

app.use(session({secret: "asdfgh"}));
app.use(bodyParser.urlencoded({extended: true}));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/test", express.static(path.join(__dirname, "test")));
app.set("views", path.join(__dirname, "/views"));


app.post("/", (req, res) => {
    if(req.body.password == password && req.body.login == login) {
        req.session.login = login;
        res.render('logado', {login: login});
        console.log("O usuário logado é: " + req.body.login);

    }
    else {
        res.render('index');
    }
})

app.get("/", (req, res) => {
    if(req.session.login){
        res.render('logado', {login: login});
    }
    else {
        res.render('index');
    }
})

app.listen(PORT, () => {
    console.log("Servidor rodando")
})