const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json(`Hello from my Node server`) 
})

app.listen(port, () => {
  console.log(`starting server on port ${port}`)
})
