const https = require('https')
const { readFileSync } = require('fs')
const { resolve } = require('path')

const { findIP } = require('./findIP')
const { makeStartLogsText } = require('./startLogs')
const devHosts = require('./config/hosts.json')

const { PORT = 5000, NODE_ENV = 'production' } = process.env

const IS_DEV = NODE_ENV !== 'production'

const APP_HOSTS = ['localhost']

if (IS_DEV) {
  const devLocalIP = findIP()

  if (devLocalIP) {
    APP_HOSTS.push(devLocalIP)
  }
}

function startApp(app) {
  if (IS_DEV) {
    const options = {
      key: readFileSync(resolve('network/config/key.pem'), 'utf8'),
      cert: readFileSync(resolve('network/config/server.pem'), 'utf8')
    }

    https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
      console.info(
        makeStartLogsText(
          APP_HOSTS.concat(...devHosts.map(({ host }) => host)),
          'https',
          PORT
        )
      )
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
