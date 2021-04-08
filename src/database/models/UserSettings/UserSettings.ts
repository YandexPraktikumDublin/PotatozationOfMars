import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'

import { IUser, User, ITheme, Theme } from '@models'

export interface IUserSettings {
  id?: number
  themeId?: number
  theme?: ITheme
  userId: number
  user?: Omit<IUser, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
  createdAt?: string
  updatedAt?: string
}

@Table
export class UserSettings extends Model<IUserSettings> {
  @ForeignKey(() => Theme)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  themeId!: string

  @BelongsTo(() => Theme)
  theme!: Theme

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
