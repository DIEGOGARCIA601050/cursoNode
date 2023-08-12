

const fs = require('node:fs')

console.log('leyendo el primer archivo  ...')
fs.readFile('./README.md', 'utf-8', (err, text) => {
    console.log(text)
})


console.log('--------------------------------')

console.log('leyendo el segundo archivo')
const fsinfo = fs.readFile('./fs.js', 'utf-8', (err, text) => {
    console.log(text)
    fs.writeFile('./a.txt',`${text}`, function(err){
        if(err){
            console.log(err);
        }
        console.log('Listo');
    });
    return text
})

console.log('fin')
console.log(fsinfo)