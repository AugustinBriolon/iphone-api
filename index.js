// index.js
const express = require('express')
const json = require('./products.json')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.json(json)
})

// Export the Express API
module.exports = app