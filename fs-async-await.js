// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)
//Solo usar en los modulos nativos que no tienen promesas nativas

const { readFile } = require('node:fs/promises')

//IIFE ---> Inmediatly Involved Function Expression
(
    async () => {
        console.log('leyendo el primer archivo  ...')
        const text = await readFile('./README.md', 'utf-8')
        console.log('Primer texto:', text)

        console.log('--------------------------------')

        console.log('leyendo el segundo archivo...')
        const segundotexto = await readFile('./fs.js', 'utf-8')
        console.log('Segundo texto:', segundotexto)
    }
)()