const connecToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connecToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))


//Host port
app.listen(port, () => {
  console.log(`iNotebook Backend listening at http://localhost:${port}`)
})