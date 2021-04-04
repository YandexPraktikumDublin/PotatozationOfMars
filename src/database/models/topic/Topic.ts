import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'
import { User } from '@models'

interface ITopic extends Model {
  theme: string
  text: string
  useId: number
}

@Table
export class Topic extends Model<ITopic> {
  @Column(DataType.STRING)
  theme!: string

  @Column(DataType.STRING)
  text!: string

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
