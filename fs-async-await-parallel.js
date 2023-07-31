// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)
//Solo usar en los modulos nativos que no tienen promesas nativas

const { readFile } = require('node:fs/promises');

Promise.all([
  readFile('./README.md', 'utf-8'),
  readFile('./fs.js', 'utf-8')
]).then(([text, segundotexto])=>{
  console.log('1ero:',text)
  console.log('2do:',segundotexto)
})