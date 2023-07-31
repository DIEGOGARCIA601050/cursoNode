const path = require('node:path')

console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('cursoNode', 'OS', 'KB_MB_GB.js')
const base = path.basename(filePath)
const fileName = path.basename(filePath, '.js')
const extension = path.extname('mi.primer.modulo.js')
const ruta = {
    root: 'C:\\',
    dir: filePath,
    base,
    name: fileName,
    ext:extension
}
Object.freeze(ruta)
console.log(filePath)
console.log(base)
console.log(fileName)
console.log(extension)
console.log(path.format(ruta))