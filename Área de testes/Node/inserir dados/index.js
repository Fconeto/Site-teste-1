const PORT = 3000;
const express = require("express");
const rota = require("./rotas/api");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api", rota);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})

