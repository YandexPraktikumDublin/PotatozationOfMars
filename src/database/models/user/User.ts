import { Model, Table, Column, DataType, HasOne } from 'sequelize-typescript'
import { Role } from '@models'

interface IUser extends Model {
  login: string
}

@Table
export class User extends Model<IUser> {
  @Column(DataType.STRING)
  login!: string

  @HasOne(() => Role)
  role!: Role
}
