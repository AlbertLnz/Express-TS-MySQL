import express from 'express'
import db from './database/database'

const app = express()
app.use(express.json())

app.get('/', async (_req, res) => {
    const results = await db.query('SELECT * FROM Products')
    res.json(results)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})