import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  AllowNull,
  HasMany
} from 'sequelize-typescript'
import { User, Comment } from '@models'

export interface ITopic {
  id?: number
  subject: string
  content: string
  userId: number
}

@Table
export class Topic extends Model<ITopic> {
  @AllowNull(false)
  @Column(DataType.STRING)
  subject!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  @HasMany(() => Comment)
  comments!: Comment[]
}
