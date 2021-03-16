const https = require('https')
const { readFileSync } = require('fs')

const { app } = require('./dist/server.js')

const { PORT = 3000 } = process.env

const options = {
  key: readFileSync('./key.pem', 'utf8'),
  cert: readFileSync('./server.crt', 'utf8')
}

https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
  console.info(`https://localhost:${PORT}`)
})
