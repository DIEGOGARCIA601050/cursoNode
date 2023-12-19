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
  if (genre) {
    res.status(302).json(ditto.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())))
  }
  if (title) {
    res.status(302).json(ditto.filter(movie => movie.title === title))
  }
  if (director) {
    res.status(302).json(ditto.filter(movie => movie.director === director))
  }
}
)

app.get('/pokemon/movies/:id', (req, res) => {
  const { id } = req.params
  res.status(302).send(ditto.find(peli => peli.id === id))
})

app.post('/pokemon/movies', (req, res) => {
  const data = req.body

  const Vali = ValidateMovie(data)
  if (Vali.success) {
    // 422 Unprocesable Entity
    // en base de datos
    const NewMovie = {
      id: randomUUID(),
      ...data
    }
    ditto.push(NewMovie)
    // req.body deberíamos guardar en bbdd
    res.status(201).json(NewMovie)
  } else {
    res.status(400).send(`Eror en la info ${Vali.error}`)
  }
})

app.patch('/pokemon/movies/:id', (req, res) => {
  const { rate } = req.query
  const { id } = req.params
  const movieIndex = ditto.findIndex(movie => movie.id === id)
  if (movieIndex === -1) {
    res.status(404).send('Peli no encontrada, verifica la URL')
  }
  const movie = ditto[movieIndex]
  if (rate) {
    movie.rate = rate
    res.status(204)
  }
})

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>Error 404: Page not found</h1>')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
