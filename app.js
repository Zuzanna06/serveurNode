const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("Requête effectuée: " + Date().toString());
//   next();
// });

app.get("/home", function (req, res) {
  res.status(200).sendFile("/HTML/index.html", { root: __dirname });
});

app.get("/contact", function (req, res) {
  res.status(200).sendFile("/HTML/contact.html", { root: __dirname });
});

app.get("/collections", function (req, res) {
  res.status(200).sendFile("/HTML/collections.html", { root: __dirname });
});
app.get("/ce_qui_se_passe", function (req, res) {
  res.status(200).sendFile("/HTML/ce_qui_se_passe.html", { root: __dirname });
});
app.get("/les_coloc_de_wow-arts", function (req, res) {
  res.status(200).sendFile("/HTML/les_coloc_de_wow-arts.html", { root: __dirname });
});

app.get("/", function (req, res) {
  res.status(301).redirect("/home");
});

app.use((req, res) => { //equivalent du else, ceci s'apelle un middleware
  res.status(404).sendFile("/HTML/404.html", { root: __dirname });
});

// essaie tous les get, si ne rentre pas dans les get rentre dans le use

app.listen(port, () => { 
    console.log("Server listening on port "+port);
})