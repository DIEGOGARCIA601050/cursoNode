//** CON CALL BACKS

const fs = require('node:fs')

const folder = process.argv[2] ?? '.';

fs.readdir(folder,(err,files)=>{
    if(err){
        console.log('error:',err)
        return
    }
    files.forEach(file=>{
        console.log(file)
    })
})