import path from 'path'
import express from 'express'
import compression from 'compression'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './server-render-middleware'

const app = express()

app.use(compression()).use(express.static(path.resolve(__dirname, '../dist')))

app.use(cookiesMiddleware())

app.get('*', serverRenderMiddleware)

export { app }
