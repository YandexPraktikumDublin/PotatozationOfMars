import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  ForeignKey,
  Default
} from 'sequelize-typescript'

import { IEnjoyer, Enjoyer, ITheme, Theme } from '@models'

export interface IEnjoyerSettings {
  id?: number
  themeId?: number
  theme?: ITheme
  isDarkModeEnabled?: boolean
  enjoyerId: number
  enjoyer?: Omit<IEnjoyer, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
  createdAt?: string
  updatedAt?: string
}

@Table
export class EnjoyerSettings extends Model<IEnjoyerSettings> {
  @ForeignKey(() => Theme)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  themeId!: string

  @BelongsTo(() => Theme)
  theme!: Theme

  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  isDarkModeEnabled!: boolean

  @ForeignKey(() => Enjoyer)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  enjoyerId!: number

  @BelongsTo(() => Enjoyer)
  enjoyer!: Enjoyer
}
