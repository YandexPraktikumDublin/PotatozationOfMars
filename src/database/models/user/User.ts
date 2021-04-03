import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  HasOne
} from 'sequelize-typescript'
import { Role } from '@models'

interface IUser {
  id: string
  login: string
}

@Table
export class User extends Model<IUser> {
  @PrimaryKey
  @Column(DataType.UUID)
  id!: string

  @Column(DataType.STRING)
  login!: string

  @HasOne(() => Role)
  role!: Role
}
