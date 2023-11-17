const { ConvertTo, MB } = require('./OS/KB_MB_GB')
const fs = require('node:fs')
const stats = fs.statSync('./README.md')
console.log(
  stats.isFile(), '\n',
  stats.isDirectory(), '\n',
  stats.isSymbolicLink(), '\n',
  (ConvertTo('Tamaño MB', stats.size, MB))
)
