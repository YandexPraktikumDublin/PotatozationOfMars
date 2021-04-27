import httpContext from 'express-http-context'
import path from 'path'
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import 'babel-polyfill'
import cookiesMiddleware from 'universal-cookie-express'
import serverRenderMiddleware from './middlewares/server-render-middleware'
import authMiddleware from './middlewares/auth-middleware'
import db from '@database'
import {
  enjoyerRouterFactory,
  topicRouterFactory,
  commentRouterFactory,
  reactionRouterFactory,
  themeRouterFactory,
  enjoyerSettingsRouterFactory,
  feedbackRouterFactory
} from '@factories'

db.sequelize.sync({ force: false }).then(() => {
  console.info('Successful connection to the database!')

  db.seeder
    .up()
    .then((result) => console.info(result))
    .catch((error) => console.error(error))
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

app.use('/api/*', authMiddleware)

app.use(
  enjoyerRouterFactory(
    db.enjoyerRepository,
    db.authTokenRepository,
    db.enjoyerSettingsRepository
  )
)
app.use(topicRouterFactory(db.topicRepository, db.enjoyerRepository))
app.use(
  commentRouterFactory(
    db.commentRepository,
    db.enjoyerRepository,
    db.reactionRepository
  )
)
app.use(reactionRouterFactory(db.reactionRepository, db.enjoyerRepository))
app.use(themeRouterFactory(db.themeRepository))
app.use(enjoyerSettingsRouterFactory(db.enjoyerSettingsRepository))
app.use(feedbackRouterFactory(db.feedbackRepository))

app.use(compression())

app.get('/sw.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'sw.js'))
})

app.use('/assets/', express.static(path.resolve(__dirname, '../dist/assets/')))

app.get('*', serverRenderMiddleware)

export { app }
