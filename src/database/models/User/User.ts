import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript'

import { Topic, Comment, Reaction } from '@models'

enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

interface IUser extends Model {
  login: string
  name: string
  role: roleEnum
}

@Table
export class User extends Model<IUser> {
  @Column(DataType.STRING)
  login!: string

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.STRING)
  role!: roleEnum

  @HasMany(() => Topic)
  topics!: Topic[]

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Reaction)
  reactions!: Reaction[]
}
