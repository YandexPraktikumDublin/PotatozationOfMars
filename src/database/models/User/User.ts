import {
  Model,
  Table,
  Column,
  AllowNull,
  Unique,
  DataType,
  HasMany,
  Default
} from 'sequelize-typescript'
import bcrypt from 'bcrypt'

import { AuthToken, Topic, Comment, Reaction } from '@models'

export enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

export interface IUser {
  id?: number
  login: string
  name: string
  passwordHash: string
  role?: roleEnum
}

@Table
export class User extends Model<IUser> {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  login!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  passwordHash!: string

  @AllowNull(false)
  @Default(roleEnum.regular)
  @Column(DataType.STRING)
  role!: roleEnum

  @HasMany(() => AuthToken)
  authTokens!: AuthToken[]

  @HasMany(() => Topic)
  topics!: Topic[]

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Reaction)
  reactions!: Reaction[]

  static authenticate = async (login: string, password: string) => {
    const user = await User.findOne({ where: { login } })

    if (user && bcrypt.compareSync(password, user.passwordHash)) {
      return user.authorize()
    }

    throw new Error('invalid login or password')
  }

  authorize = async () => {
    const user = this
    const authToken = await AuthToken.generate(user.id)
    await user.$add('AuthToken', authToken)

    return { user, authToken }
  }

  logout = async (token: string) => {
    await AuthToken.destroy({ where: { token } })
  }
}
