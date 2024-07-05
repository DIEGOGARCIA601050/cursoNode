import http, { IncomingMessage, ServerResponse } from "http";
const { buscarpuerto } = require('./puertolibre')

const processRequest = (req:IncomingMessage, res:ServerResponse) => {
  res.setHeader('Content-Type', 'text/html')
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
  (port:number) => {
    server.listen(port, () => {
      console.log(`Server on port http://localhost:${port} ${typeof port}`)
    })
  }
)
