import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import {
  User,
  AuthToken,
  Topic,
  Comment,
  CommentAncestor,
  Reaction
} from '@models'

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'password',
  database: process.env.POSTGRES_DB ?? 'potatozation-of-mars',
  dialect: 'postgres',
  repositoryMode: true,
  models: [User, AuthToken, Topic, Comment, CommentAncestor, Reaction]
}

const sequelize = new Sequelize(sequelizeOptions)

const userRepository = sequelize.getRepository(User)
const authTokenRepository = sequelize.getRepository(AuthToken)
const topicRepository = sequelize.getRepository(Topic)
const commentRepository = sequelize.getRepository(Comment)
const reactionRepository = sequelize.getRepository(Reaction)

const db = {
  Sequelize,
  sequelize,
  userRepository,
  authTokenRepository,
  topicRepository,
  commentRepository,
  reactionRepository
}

export default db
