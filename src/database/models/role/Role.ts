import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript'
import { User } from '@models'

export enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

interface IRole extends Model {
  roles: roleEnum
}

@Table
export class Role extends Model<IRole> {
  @Column(DataType.STRING)
  roles!: roleEnum

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
