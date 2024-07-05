"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const { buscarpuerto } = require('./puertolibre');
const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end('<h1>Bienvenido</h1>');
    }
    else if (req.url === '/contacto') {
        res.end('<h1>Formas de contacto</h1>');
    }
    else {
        res.statusCode = 404;
        res.end('404 page not found');
    }
};
const puertoDes = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const server = http_1.default.createServer(processRequest);
buscarpuerto(puertoDes).then((port) => {
    server.listen(port, () => {
        console.log(`Server on port http://localhost:${port} ${typeof port}`);
    });
});
