const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(morgan("dev"));

app.set('views','./HTML'); // définition du chemin de mes views
app.set('view engine','ejs'); // définition du moteur de render ou de views ou de templates
app.use(express.urlencoded({extended : false}))
// app.use((req, res, next) => {
//   console.log("Requête effectuée: " + Date().toString());
//   next();
// });

app.get("/home", function (req, res) {
  res.status(200).render("index", { root: __dirname });
});

app.get("/contact", function (req, res) {
  res.status(200).render("contact", { root: __dirname });
});

app.get("/collections", function (req, res) {
  res.status(200).render("collections", { root: __dirname });
});
app.get("/collaborations", function (req, res) {
  res.status(200).render("collaborations", { root: __dirname });
});
app.get("/ce_qui_se_passe", function (req, res) {
  res.status(200).render("ce_qui_se_passe", { root: __dirname });
});
app.get("/les_coloc_de_wow-arts", function (req, res) {
  res.status(200).render("les_coloc_de_wow-arts", { root: __dirname });
});

app.get("/", function (req, res) {
  res.status(301).redirect("/home");
});

app.use((req, res) => { //equivalent du else, ceci s'apelle un middleware
  res.status(404).sendFile("404.ejs", { root: __dirname });
});

// essaie tous les get, si ne rentre pas dans les get rentre dans le use

app.listen(port, () => { 
    console.log("Server listening on port "+port);
})



    