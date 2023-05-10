const connecToMongo = require('./db')
const express = require('express')

connecToMongo();

const app = express()
const port = 3000

app.use(express.json())

//Available routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})