import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { User, Role } from '@models'

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'password',
  database: process.env.POSTGRES_DB ?? 'potatozation-of-mars',
  dialect: 'postgres',
  repositoryMode: true,
  models: [User, Role]
}

const sequelize = new Sequelize(sequelizeOptions)

const db = {
  Sequelize,
  sequelize
}

export default db
