const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('<h1> Hello codingwale Students !!! </h1>
            <h2> Version 3.0.0 </h2>
            <h3> Node.js application using Nexus </h3>
           ')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
