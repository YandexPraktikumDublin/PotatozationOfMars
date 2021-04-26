import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import {
  Enjoyer,
  EnjoyerSettings,
  AuthToken,
  Topic,
  Comment,
  CommentAncestor,
  Reaction,
  Theme,
  Feedback
} from '@models'
import { Umzug, SequelizeStorage } from 'umzug'

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
  repositoryMode: true,
  models: [
    Enjoyer,
    EnjoyerSettings,
    AuthToken,
    Topic,
    Comment,
    CommentAncestor,
    Reaction,
    Theme,
    Feedback
  ]
}

const sequelize = new Sequelize(sequelizeOptions)

const seeder = new Umzug({
  migrations: {
    glob: ['../seeders/*.js', { cwd: __dirname }]
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'seeder_meta'
  }),
  logger: console
})

const enjoyerRepository = sequelize.getRepository(Enjoyer)
const enjoyerSettingsRepository = sequelize.getRepository(EnjoyerSettings)
const authTokenRepository = sequelize.getRepository(AuthToken)
const topicRepository = sequelize.getRepository(Topic)
const commentRepository = sequelize.getRepository(Comment)
const reactionRepository = sequelize.getRepository(Reaction)
const themeRepository = sequelize.getRepository(Theme)
const feedbackRepository = sequelize.getRepository(Feedback)

const db = {
  Sequelize,
  sequelize,
  seeder,
  enjoyerRepository,
  enjoyerSettingsRepository,
  authTokenRepository,
  topicRepository,
  commentRepository,
  reactionRepository,
  themeRepository,
  feedbackRepository
}

export default db
