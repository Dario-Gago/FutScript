const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'futscript',
  allowExitOnIdle: true
})

const getTeams = async () => {
  //...
}

const getPlayers = async (teamID) => {
  //...
}

const addTeam = async (equipo) => {
  //...
}

const addPlayer = async ({ jugador, teamID }) => {
  //...
}
//Agragar la consulta de post login
const login = async ({ username, password }) => {
  const query = 'SELECT * FROM usuarios WHERE username = $1 AND password = $2'
  const values = [username, password]
  const { rows } = await pool.query(query, values)
  if (rows.length === 0) {
    throw new Error('Invalid username or password')
  }
}
module.exports = { getTeams, addTeam, getPlayers, addPlayer, login }
