const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello world')
})

app.post('/webhook', (req, res) => {
  console.log(req.body)
})

console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})