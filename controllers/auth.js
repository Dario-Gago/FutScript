const { login } = require('../db/consultas')
const loginController = async (req, res) => {
  const { username, password } = req.body
  console.log('Login data:', username, password) // <-- debug
  try {
    await login({ username, password })
    res.status(200).send({ message: 'Login successful' })
  } catch (error) {
    console.error('Login error:', error.message)
    res.status(401).send({ message: 'Invalid username or password' })
  }
}

module.exports = { loginController }
