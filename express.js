const express = require('express')
const { ValidateMovie } = require('./schemas/schemaMovie')
const ditto = require('./pokemon/movies.json')
const { randomUUID } = require('node:crypto')
const app = express()
const port = 3000

app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let body = ''
//   req.on('data', chunck => {
//     body += chunck.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// guardar req en DB
// isUserLoged()
// Cookies
// })

app.get('/', (req, res) => {
  res.send('<h1>Pagina Principal</h1>')
})

app.get('/pokemon/movies', (req, res) => {
  res.json(ditto)
})

app.get('/pokemon/movies/filter', (req, res) => {
  const { genre, title, director } = req.query
  // function filter (query) {
  //   if (query) {
  //     res.json(ditto.filter(movie => movie.query === query))
  //   }
  // }
  if (genre) {
    res.json(ditto.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())))
  }
  // filter(director)
  if (title) {
    res.json(ditto.filter(movie => movie.title === title))
  }
  if (director) {
    res.json(ditto.filter(movie => movie.director === director))
  }
}
)

app.get('/pokemon/movies/:id', (req, res) => {
  const { id } = req.params
  res.send(ditto.find(peli => peli.id === id))
})

app.post('/pokemon', (req, res) => {
  const data = req.body
  const { name, genre, rate, duration, watched } = data
  const V = ValidateMovie(data)
  if (V) {
    const NewMovie = {
      id: randomUUID(),
      name,
      genre,
      rate,
      duration,
      watched: watched ?? 0
    }
    ditto.push(NewMovie)
    // req.body deberíamos guardar en bbdd
    res.status(201).json(NewMovie)
  }
})

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>Error 404: Page not found</h1>')
})

app.listen(port, () => {
  console.log(`https://localhost:${port}`)
})
