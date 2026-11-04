const express = require('express')
const app = express()
const port = 3000

const VERSION = '2.0.0';

app.get('/', (req, res) => {
  res.send('
           <h1>Live - Node.js Application</h1>
           <h2>Using Jenkins and Nexus</h2>
           <h3>Hello Codingwale Students</h3>
    ')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Node.js Version: ${VERSION}`);
  console.log(`Example app listening on port ${port}`)
})
