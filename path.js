const path = require('node:path')

console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('cursoNode', 'OS', 'KB_MB_GB.js')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
