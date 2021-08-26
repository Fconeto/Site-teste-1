const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();

let posts = [
    {id: "eu",
     title: "Teste do mural",
      description: "Descrição"
    },

]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
})

app.post("/new",bodyParser.json(), (req, res) => {
    
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    if (title.length == 0 || description.length == 0) {
        res.send("Falta informações");
    }
    else {
        posts.push(id, title, description);
        res.send("Post adicionado");
    }


})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})

function generateID() {
    return Math.random().toString(36).substring(2, 9);
}