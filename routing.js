"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const node_http_1 = __importDefault(require("node:http"));
// commonJS -> módulos clásicos de node
const dittoJSON = require('./pokemon/movies.json');
const processRequest = (req, res) => {
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
                    (0, cors_1.default)();
                    let body = '';
                    // escuchar el evento data
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    });
                    req.on('end', () => {
                        const data = JSON.parse(body);
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
const server = node_http_1.default.createServer(processRequest);
server.listen(3000, () => {
    console.log('server listening on port http://localhost:3000');
});
