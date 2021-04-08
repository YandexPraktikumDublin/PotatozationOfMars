import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import {
  User,
  UserSettings,
  AuthToken,
  Topic,
  Comment,
  CommentAncestor,
  Reaction,
  Theme
} from '@models'
import { Umzug, SequelizeStorage } from 'umzug'

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'password',
  database: process.env.POSTGRES_DB ?? 'potatozation-of-mars',
  dialect: 'postgres',
  repositoryMode: true,
  models: [
    User,
    UserSettings,
    AuthToken,
    Topic,
    Comment,
    CommentAncestor,
    Reaction,
    Theme
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

const userRepository = sequelize.getRepository(User)
const userSettingsRepository = sequelize.getRepository(UserSettings)
const authTokenRepository = sequelize.getRepository(AuthToken)
const topicRepository = sequelize.getRepository(Topic)
const commentRepository = sequelize.getRepository(Comment)
const reactionRepository = sequelize.getRepository(Reaction)
const themeRepository = sequelize.getRepository(Theme)

const db = {
  Sequelize,
  sequelize,
  seeder,
  userRepository,
  userSettingsRepository,
  authTokenRepository,
  topicRepository,
  commentRepository,
  reactionRepository,
  themeRepository
}

export default db
