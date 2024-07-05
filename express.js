"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const { ValidateMovie, validateParcialMovie } = require('./schemas/schemaMovie');
const movies = require('./pokemon/movies.json');
const node_crypto_1 = require("node:crypto");
const app = (0, express_1.default)();
const port = 3000;
app.disable('x-powered-by');
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        const AceptedOrigins = [
            '*',
            'dominio.example'
        ];
        if (AceptedOrigins.includes(origin)) {
            return callback(null, true);
        }
        if (!origin) {
            return callback(null, true);
        }
        return callback(new Error('No hay cors'));
    }
}));
app.get('/', (req, res) => {
    res.send('<h1>Pagina Principal</h1>');
});
app.get('/pokemon/movies', (req, res) => {
    res.json(movies);
});
app.get('/pokemon/movies/filter', (req, res) => {
    const { genre, title, director } = req.query;
    if (genre) {
        res.status(302).json(movies.filter((movie) => movie.Genre.some(g => g.toLowerCase() === genre.toLowerCase())));
    }
    if (title) {
        res.status(302).json(movies.filter((movie) => movie.title === title));
    }
    if (director) {
        res.status(302).json(movies.filter((movie) => movie.director === director));
    }
});
app.get('/pokemon/movies/:id', (req, res) => {
    const { id } = req.params;
    const foundMovie = movies.find((movie) => movie.id === id);
    if (foundMovie) {
        res.status(302).send(foundMovie);
    }
    else {
        res.status(400).send('id no valida');
    }
});
app.post('/pokemon/movies', (req, res) => {
    const data = req.body;
    const Vali = ValidateMovie(data);
    if (Vali.success) {
        // 422 Unprocesable Entity
        // en base de datos
        const NewMovie = Object.assign({ id: (0, node_crypto_1.randomUUID)() }, data);
        movies.push(NewMovie);
        // req.body deberíamos guardar en bbdd
        res.status(201).json(NewMovie);
    }
    else {
        res.status(400).send(`Eror en la info ${Vali.error.message}`);
    }
});
app.patch('/pokemon/movies/:id', (req, res) => {
    const { id } = req.params;
    const result = validateParcialMovie(req.body);
    if (!result.success) {
        res.status(400).send(result.error.message);
    }
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) {
        res.status(404).send('Peli no encontrada, verifica la URL');
    }
    const UpdateMovie = Object.assign(Object.assign({}, movies[movieIndex]), result.data);
    movies[movieIndex] = UpdateMovie;
    return res.json(movies[movieIndex]);
});
app.delete('/pokemon/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex > 0) {
        movies.splice(movieIndex, 1);
        res.send(movies);
    }
});
// la última a la que va a llegar
app.use((req, res) => {
    res.status(404).send('<h1>Error 404: Page not found</h1>');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
