const https = require('https')
const { readFileSync } = require('fs')
const { resolve } = require('path')
const open = require('open')

const { findIP } = require('./findIP')
const { makeStartLogsText } = require('./startLogs')
const devHosts = require('./config/hosts.json')

const { PORT = 3000, NODE_ENV } = process.env

const isDev = NODE_ENV === 'development'

const APP_HOSTS = ['localhost']

if (isDev) {
  const devLocalIP = findIP()

  if (devLocalIP) {
    APP_HOSTS.push(devLocalIP)
  }
}

function startApp(app) {
  if (isDev) {
    const options = {
      key: readFileSync(resolve('network/config/key.pem'), 'utf8'),
      cert: readFileSync(resolve('network/config/server.crt'), 'utf8')
    }

    https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
      console.info(
        makeStartLogsText(
          APP_HOSTS.concat(...devHosts.map(({ host }) => host)),
          'https',
          PORT
        )
      )

      open(`https://${devHosts[0].host}:3000`)
    })

    return
  }

  app.listen(PORT, () => {
    console.info('Application is started on localhost:', PORT)
  })
}

module.exports = {
  startApp: startApp
}
