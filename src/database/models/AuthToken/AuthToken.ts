import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'
import { uid } from 'rand-token'

import { User } from '@models'

export interface IAuthToken {
  token: string
  userId: number
}

@Table
export class AuthToken extends Model<IAuthToken> {
  @AllowNull(false)
  @Column(DataType.STRING)
  token!: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  generate = async function (userId: number) {
    if (!userId) {
      throw new Error('AuthToken requires a user ID')
    }

    const token = uid(32)

    return AuthToken.create({ token, userId })
  }
}
