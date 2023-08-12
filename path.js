const path = require('node:path')

console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('cursoNode', 'mjs', 'a.txt')
const base = path.basename(filePath)
const fileName = path.basename(filePath, '.txt')
const extension = path.extname('mi.primer.modulo.txt')
console.log(filePath)
console.log(base)
console.log(fileName)
console.log(extension)