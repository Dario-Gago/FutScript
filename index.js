const express = require('express')
const app = express()

app.use(express.json())
app.listen(3000, console.log('SERVER ON'))

const {
  obtenerJugadores,
  registrarJugador
} = require('./controllers/jugadores')
const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos')
const { loginController } = require('./controllers/auth')

app.get('/equipos', obtenerEquipos)
app.post('/equipos', agregarEquipo)
//Agreando el post para el login
app.post('/login', loginController)
app.get('/equipos/:teamID/jugadores', obtenerJugadores)
app.post('/equipos/:teamID/jugadores', registrarJugador)
