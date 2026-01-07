// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)
//Solo usar en los modulos nativos que no tienen promesas nativas

const { readFile } = require('node:fs/promises');

Promise.all([
  readFile('./README.md', 'utf-8'),
  readFile('./fs.js', 'utf-8')
]).then((promises)=>{
  if(Array.isArray(promises))
  {
    for(i=0;i<promises.length;i++)
    {
      console.log(`i°: ${promises[i]}`)
    }
})
