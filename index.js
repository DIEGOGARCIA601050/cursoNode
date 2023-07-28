const os = require('node:os')
const { memoryUsage } = require('node:process')
console.log('-------------------')
console.log('nombre del SO', os.platform())
console.log('nombre del SO', os.release())
console.log('Memoria total (bites)', os.totalmem())
const totalmem = os.totalmem()
console.log('Memoria total (KB)', totalmem/1024)
console.log('Memoria total (MB)', totalmem/1048576)
console.log('Memoria total (GB)', totalmem/(2**30))
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
