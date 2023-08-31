// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)
//Solo usar en los modulos nativos que no tienen promesas nativas

import { readFile,writeFile } from 'node:fs/promises';

    console.log('leyendo el primer archivo  ...')
    const text = await readFile('./README.md', 'utf-8')
    const text1 = await writeFile('./a.txt',text)
    .then(text => {
        console.log('Haber como sale:', text)
        })
    console.log('Primer texto:', text)

    console.log('--------------------------------')

    console.log('leyendo el segundo archivo...')
    const segundotexto = await readFile('./fs.js', 'utf-8')
    console.log('Segundo texto:', segundotexto)


