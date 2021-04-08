import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  Unique,
  Default,
  HasMany
} from 'sequelize-typescript'
import { IUserSettings, UserSettings } from '../UserSettings/UserSettings'

export interface ITheme {
  id?: number
  name: string
  isEnabled: boolean
  userSettings?: IUserSettings[]
  createdAt?: string
  updatedAt?: string
}

@Table
export class Theme extends Model<ITheme> {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  name!: string

  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  isEnabled!: boolean

  @HasMany(() => UserSettings)
  userSettings!: UserSettings[]
}
