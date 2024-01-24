import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
    res.send('Hello World!')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})