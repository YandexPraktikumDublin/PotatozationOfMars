import httpContext from 'express-http-context'
import path from 'path'
import express from 'express'
import compression from 'compression'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './server-render-middleware'
import db from '@models'

const app = express()

app.use(cookiesMiddleware())

app.use(httpContext.middleware)

app.use((req, res, next) => {
  httpContext.set('cookies', (req as any).universalCookies.cookies)
  next()
})

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Successful connection to the database!')
  })
  .catch((err) => {
    console.log(err)
  })

app.use(compression()).use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', serverRenderMiddleware)

export { app }
