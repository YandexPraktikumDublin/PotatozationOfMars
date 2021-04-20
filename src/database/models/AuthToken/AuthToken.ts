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

import { IEnjoyer, Enjoyer } from '@models'

export interface IAuthToken {
  id?: number
  token: string
  enjoyerId: number
  enjoyer?: Omit<IEnjoyer, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
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

  @ForeignKey(() => Enjoyer)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  enjoyerId!: number

  @BelongsTo(() => Enjoyer)
  enjoyer!: Enjoyer
}
