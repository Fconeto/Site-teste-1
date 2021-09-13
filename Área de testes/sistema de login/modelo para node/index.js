const express = require("express");
const session = require("express-session");

var path = require("path");
const PORT = 3000;
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/test", express.static(path.join(__dirname, "views")));
app.set("views", path.join(__dirname, "/views"));

app.listen(PORT, () => {
    console.log("Servidor rodando");
})