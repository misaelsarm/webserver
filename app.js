const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/webhook', (req, res) => {
  console.log(req.body)
})

app.listen(8080)