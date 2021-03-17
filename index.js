const { app } = require('./dist/server.js')
const { startApp } = require('./network/startApp')

startApp(app)
