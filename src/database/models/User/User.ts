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

import { AuthToken, Topic, Comment, Reaction } from '@models'

export enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

export interface IUser {
  id?: number
  login: string
  name: string
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
}
