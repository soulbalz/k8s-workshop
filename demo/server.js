const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  const responseString = `
    <h1>APP NAME: ${process.env.APP_NAME}</h1>
    <hr />
    <h5>ENCODE _KEY: ${process.env.ENCODE_KEY}</h5>
    <h5>SECRET_KEY: ${process.env.SECRET_KEY}</h5>
  `
  res.send(responseString)
})

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`)
})