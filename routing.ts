import cors from "cors";
import http from "node:http";

// commonJS -> módulos clásicos de node
const dittoJSON = require('./pokemon/movies.json')
type DittoID = `${string}-${string}-${string}-${string}-${string}`
type Ditto = {
    id:DittoID
    title:string
    year:number
    timestamp:number
}

const processRequest = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>Home</h1>');
        case '/contactanos':
          return res.end('<h1>Contactanos</h1>');
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404</h1>');
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          cors();
          let body = '';

          // escuchar el evento data
          req.on('data', (chunk: string) => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const data:Ditto = JSON.parse(body);
            // llamar a una base de datos para guardar la info
            console.log(data);
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });

            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404 Not Found');
      }
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log('server listening on port http://localhost:3000');
});
