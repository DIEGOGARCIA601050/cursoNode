const fs = require('node:fs/promises')

console.log('leyendo el primer archivo  ...')
fs.readFile('./README.md', 'utf-8')
    .then(text => {
        console.log('Primer texto:', text)
        }
    )


console.log('--------------------------------')

console.log('leyendo el segundo archivo...')
fs.readFile('./fs.js', 'utf-8')
        .then(text => {
        console.log('Segundo texto:', text)
        }
    )