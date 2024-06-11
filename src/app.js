import express from 'express';
import { pool } from './database.js'
import { PORT } from './config.js'



const app = express();

app.get('/', async (req, res) => {
  const [users] = await pool.query('SELECT * FROM users')
  res.json(users)
})

app.get('/oda', async (req, res) => {
  const [result] = await pool.query('SELECT "Oda" as name')
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users (username) VALUES ("Oda")')
  res.json(result)
})

app.listen(3000)
console.log(`Server on port 3000`)