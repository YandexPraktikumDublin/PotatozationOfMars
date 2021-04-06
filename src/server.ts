import httpContext from 'express-http-context'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './middlewares/server-render-middleware'
import authMiddleware from './middlewares/auth-middleware'
import db from '@database'
import {
  userRouterFactory,
  topicRouterFactory,
  commentRouterFactory,
  reactionRouterFactory
} from '@factories'

db.sequelize.sync({ force: true }).then(() => {
  console.log('Successful connection to the database!')
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cookiesMiddleware())

app.use(httpContext.middleware)

app.use((req, res, next) => {
  httpContext.set('cookies', req.universalCookies.cookies)
  next()
})

app.use(authMiddleware)

app.use(userRouterFactory(db.userRepository, db.authTokenRepository))

app.use(
  topicRouterFactory(
    db.topicRepository,
    db.userRepository,
    db.commentRepository
  )
)
app.use(
  commentRouterFactory(
    db.commentRepository,
    db.userRepository,
    db.reactionRepository
  )
)

app.use(reactionRouterFactory(db.reactionRepository, db.userRepository))

app.use(compression()).use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', serverRenderMiddleware)

export { app }
