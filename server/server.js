const mail = require('./mail')
const proxy = require('express-http-proxy')

const express = require('express')
const app = express()
const port = 4000

if (process.env.NODE_ENV === "production") {
  app.serveStatic(express.static('build'))
} else {
  app.use(proxy('http://localhost:3000'))
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
