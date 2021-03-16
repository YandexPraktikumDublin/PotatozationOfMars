import httpContext from 'express-http-context'
import path from 'path'
import express from 'express'
import compression from 'compression'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './server-render-middleware'

const app = express()

app.use(cookiesMiddleware())

app.use(httpContext.middleware)

app.use((req, res, next) => {
  // @ts-ignore
  httpContext.set('cookies', req.universalCookies.cookies)
  next()
})

app.use(compression()).use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', serverRenderMiddleware)

export { app }
