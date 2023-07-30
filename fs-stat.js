// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)
//Solo usar en los modulos nativos que no tienen promesas nativas

const fs = require('node:fs')

console.log('leyendo el primer archivo  ...')
fs.readFile('./README.md', 'utf-8', (err, text) => {
    console.log(text)
})


console.log('--------------------------------')

console.log('leyendo el segundo archivo')
fs.readFile('./fs.js', 'utf-8', (err, text) => {
    console.log(text)
})