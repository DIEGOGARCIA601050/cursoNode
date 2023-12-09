const net = require('node:net')

function buscarpuerto (puertoDes) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(puertoDes, () => {
      const { port } = server.address()
      server.close(() => {
        console.log(`Free Server on port ${port}`)
        resolve(port)
      })
    })
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        buscarpuerto(0).then(port => resolve(port))
      } else {
        reject(error)
      }
    })
  })
}
module.exports = { buscarpuerto }
