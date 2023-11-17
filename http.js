const http = require('node:http')
const { buscarpuerto } = require('./puertolibre')

const puertoDes = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  res.end('Hola Edmundo')
})

buscarpuerto(puertoDes).then(
  port => {
    server.listen(port, () => {
      console.log(`Server on port http://localhost:${port}`)
    })
  }
)
