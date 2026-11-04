const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('<h1> Hello codingwale Teacher !!!</h1>
           <h2>1.0.0</h2>
           ')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
