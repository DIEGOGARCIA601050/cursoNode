//* CON ASYNC AWAIT

//IMPORT MODULES
const fs = require('node:fs/promises');
const path = require('node:path');

//LS FUNCTION
async function ls(directory) {
    try {
        const files = await fs.readdir(directory)
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
        }
    }catch{err=>{
        if(err){
            console.log(`error de lectura ${err} en ${directory}`);
            return
        }
    }}    
}

//Parametros
const folder = process.argv[2] ?? '.';
ls(folder);