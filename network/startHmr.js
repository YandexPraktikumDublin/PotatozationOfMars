const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const clientConfig = require('../webpack.client.js')

function startHmr() {
  const compiler = webpack({ ...clientConfig, mode: 'development' })

  const app = express()

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: clientConfig.output.publicPath,
      writeToDisk: true
    })
  )

  app.use(webpackHotMiddleware(compiler))

  app.listen(3000, () => {
    console.info('Application is started on localhost:', 3000)
  })
}

;(function () {
  startHmr()
})()
