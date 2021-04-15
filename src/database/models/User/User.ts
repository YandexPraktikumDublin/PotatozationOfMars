import {
  DefaultScope,
  Scopes,
  Model,
  Table,
  Column,
  AllowNull,
  Unique,
  DataType,
  HasMany,
  Default
} from 'sequelize-typescript'

import {
  AuthToken,
  Topic,
  Comment,
  Reaction,
  IAuthToken,
  ITopic,
  IComment,
  IReaction
} from '@models'

export enum RoleEnum {
  regular = 'regular',
  admin = 'admin'
}

export interface IUser {
  id?: number
  login: string
  name: string
  passwordHash?: string
  role?: RoleEnum
  authTokens?: IAuthToken[]
  topics?: ITopic[]
  comments?: IComment[]
  reactions?: IReaction[]
  createdAt?: string
  updatedAt?: string
}

@DefaultScope(() => ({
  attributes: {
    exclude: ['passwordHash', 'role', 'createdAt', 'updatedAt']
  }
}))
@Scopes(() => ({
  withSensitiveData: {
    attributes: {
      include: ['passwordHash', 'role', 'createdAt', 'updatedAt']
    }
  }
}))
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
  @Default(RoleEnum.regular)
  @Column(DataType.STRING)
  role!: RoleEnum

  @HasMany(() => AuthToken)
  authTokens!: AuthToken[]

  @HasMany(() => Topic)
  topics!: Topic[]

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Reaction)
  reactions!: Reaction[]
}
