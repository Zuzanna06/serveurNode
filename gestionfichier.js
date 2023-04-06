const fs = require('fs');
// if (fs.existsSync('./monDossier')){
//     fs.rmdir('./monDossier', (Error) => {
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier supprimé')
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (Error)=>{
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier créé');
//         }
//     })
// }

// cree un fichier txt dans le dosssier monDosier et ecrire ce fichier est ecrie en JS

// const fs = require('fs');
// if (fs.existsSync('./monDossier')) {
//     fs.rmdir('./monDossier', (Error)=> {
//         if (Error) {
//             console.error(Error);
//         } else {
//             console.log('dossier suprimer');
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (Error)=>{
//         if (Error) {
//             console.error(Error);
//         } else {
//             console.log('dossier créer');
//         }
//     })
// }

// fs.readFile('./monDossier/newfile.txt, ','ce fichier a ete ecrie avec node', 
// function (err)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(le fichier a ete cree');
//     }


    if(fs.existsSync('./monDossier/monFichier')){
        fs.unlink('./monDossier/monFichier', (error)=>{
            if(error){
                console.error(error);
           }else{
            console.log('fichier supprimé');
           }
        })
    }else{
        fs.writeFile('./monDossier/monFichier','Ce fichier a été créé avec Node', (error)=>{
            if(error){
                console.error(error);
            }else{
            console.log('fichier créé');
            }
        })
    }
// lecture de monfichier.txt de monDossier
// fs.readFile('./monDossier/monFichier', 
//     (Error,Data)=>{
//     if (Error) {
//     console.log(Error);
// } else {
//     console.log(Data.toString());
// }
// })
// }
