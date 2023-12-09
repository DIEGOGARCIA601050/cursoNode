const http = require('node:http')
const { buscarpuerto } = require('./puertolibre')

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html', 'charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Bienvenido</h1>')
  } else if (req.url === '/contacto') {
    res.end('<h1>Formas de contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('404 page not found')
  }
}

const puertoDes = process.env.PORT ?? 3000
const server = http.createServer(processRequest)

buscarpuerto(puertoDes).then(
  port => {
    server.listen(port, () => {
      console.log(`Server on port http://localhost:${port}`)
    })
  }
)
