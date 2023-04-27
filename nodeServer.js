//CREER UN DOSSIER HTML
//DANS LE CALLBACK DE LA METHODE CREATESERVEUR ON VA CREEER UNE VARIABLE QUI SERA EGALE A UNE STRING VIDE

const http = require('http');
const fs = require('fs');
const server = http.createServer(
    (Requeste, Response)=>{
        let fichier ="";
        Response.setHeader('Content-Type', 'text/html; charset=utf8');
        console.log("Server created successfully.")
    if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
        fichier = "./HTML/index.ejs";
       //Response.write('<p> Vous êtes sur la home page </p>');
    }else if ((Requeste.url === '/' || Requeste.url === '/contact') && Requeste.method === 'GET' ) {
        fichier = "./HTML/contact.html";
        //Response.write('<p> vous êtes sur la page contact </p>');
    }else if ((Requeste.url === '/' || Requeste.url === '/product') && Requeste.method === 'GET' ) {
        fichier = "./HTML/product.html";
        //Response.write('<p> vous êtes sur la page contact </p>');
    }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
        fichier = "./HTML/profil.html";
    }else if ((Requeste.url === '/' || Requeste.url === '/product') && Requeste.method === 'GET' ) {
        fichier = "./HTML/collaborations.html";
        //Response.write('<p> Vous êtes sur la page profil </p>');
    } else {
        fichier = "./HTML/404.html";
        //Response.write('404 page non valide');
    }
    fs.readFile(fichier,
        (Error, Data)=>{
            if (Error) {
                console.error(Error);
                Response.end();
            } else {
                Response.write(Data);
                Response.end();
            }
        })
}
);
server.listen(8080, "localhost",()=>{
    console.log("Server listening on port 8080");
})