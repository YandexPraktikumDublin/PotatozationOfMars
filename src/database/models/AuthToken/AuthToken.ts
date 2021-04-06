import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  ForeignKey,
  Index,
  Unique
} from 'sequelize-typescript'

import { User } from '@models'

export interface IAuthToken {
  token: string
  userId: number
}

@Table
export class AuthToken extends Model<IAuthToken> {
  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  token!: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
