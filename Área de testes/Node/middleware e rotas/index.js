const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// Rotas
var aluno = require("./rotas/alunos")


// -Middleware-

// let consoleMethod = (req, res, next) => {
//     console.log(req.method);
//     next();
// }

// let hello = (req, res) => {
//     res.send("Hello World");
// }

// app.use("/", bodyParser.json())
// app.use("/", consoleMethod)
// app.get("/", hello)

// app.post("/", hello)

// // app.get("/", consoleMethod, hello)

// // app.post("/", consoleMethod, hello)


// app.listen(3000, () => console.log("Server rodando..."));

// -Rotas- 

// Testado com o Insomnia

// let alunos = [{id: 0, nome: "João", idade: "22"},
//                   {id: 1, nome: "Jonas", idade: "17"},
//                   {id: 2, nome: "Neto", idade: "20"},
//                   {id: 3, nome: "Maria", idade: "34"}]

// app.use(bodyParser.urlencoded())

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// app.get("/alunos", (req, res) => {

//     res.json(JSON.stringify(alunos))
//     for (let i = 0; alunos[i]; i++) {
//         let alunoNome = alunos[i];
//         console.log(alunoNome);
//     }

// })

// app.get("/alunos/idade", (req, res) => {

//     res.json(JSON.stringify(alunos))
//     for (let i = 0; alunos[i]; i++) {
//         let alunoNome = alunos[i].nome;
//         let alunoIdade = alunos[i].idade;
//         console.log(alunoNome + ": " + alunoIdade);
//     }

// })

// app.get("/aluno", (req, res) => {
//     console.log(req.body);
//     let aluno = alunos[req.body.id].nome;
//     console.log(aluno);
//     res.json(aluno);
// })

// app.listen(3000, () => console.log("Server rodando..."))

// Testado com o Insomnia

// Separando rotas



app.use(bodyParser.urlencoded())

app.use("/aluno", aluno);

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(3000, () => console.log("Server rodando..."))
