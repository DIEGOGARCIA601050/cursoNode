const {ConvertTo} = require('./OS/KB_MB_GB')
const fs = require('node:fs')
const stats = fs.statSync('./README.md')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    (ConvertTo('Tamaño MB',stats.size,1048576))
)