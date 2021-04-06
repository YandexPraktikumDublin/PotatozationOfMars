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

import { IUser, User } from '@models'

export interface IAuthToken {
  token: string
  userId: number
  user?: Omit<IUser, 'passwordHash'>
  createdAt?: string
  updatedAt?: string
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
