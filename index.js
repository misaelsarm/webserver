const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/webhook', (req, res) => {
  console.log({ body: req.body })
  console.log({line_items: req.body.line_items})
})

console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})