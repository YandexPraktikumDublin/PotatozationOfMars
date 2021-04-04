import httpContext from 'express-http-context'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './server-render-middleware'
import db from '@database'
import { User, Topic, Comment, Reaction } from '@models'
import {
  userRouterFactory,
  topicRouterFactory,
  commentRouterFactory,
  reactionRouterFactory
} from '@factories'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cookiesMiddleware())

app.use(httpContext.middleware)

app.use((req, res, next) => {
  httpContext.set('cookies', (req as any).universalCookies.cookies)
  next()
})

const userRepository = db.sequelize.getRepository(User)
const topicRepository = db.sequelize.getRepository(Topic)
const commentRepository = db.sequelize.getRepository(Comment)
const reactionRepository = db.sequelize.getRepository(Reaction)

// TODO: закрыть все запросы для не авторизированный пользователей
app.use(userRouterFactory(userRepository))
app.use(topicRouterFactory(topicRepository, userRepository, commentRepository))
app.use(
  commentRouterFactory(commentRepository, userRepository, reactionRepository)
)
app.use(reactionRouterFactory(reactionRepository, userRepository))

db.sequelize.sync({ force: true }).then(() => {
  console.log('Successful connection to the database!')
})

app.use(compression()).use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', serverRenderMiddleware)

export { app }
