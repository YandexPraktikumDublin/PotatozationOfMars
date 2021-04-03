import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript'
import { User } from '@models'

export enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

interface IRole {
  id: string
  roles: roleEnum
}

@Table
export class Role extends Model<IRole> {
  @PrimaryKey
  @Column(DataType.UUID)
  id!: string

  @ForeignKey(() => User)
  @Column(DataType.STRING)
  roles!: roleEnum

  @BelongsTo(() => User)
  user!: User
}
