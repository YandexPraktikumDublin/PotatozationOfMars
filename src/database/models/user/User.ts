import { Model, Table, Column, DataType } from 'sequelize-typescript'

enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

interface IUser extends Model {
  login: string
  name: string
  roles: roleEnum
}

@Table
export class User extends Model<IUser> {
  @Column(DataType.INTEGER)
  userId!: number

  @Column(DataType.STRING)
  login!: string

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.STRING)
  roles!: roleEnum
}
