import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'

import { User, Comment } from '@models'

interface IReaction extends Model {
  content: string
}

@Table
export class Reaction extends Model<IReaction> {
  @Column(DataType.STRING)
  content!: string

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  commentId!: number

  @BelongsTo(() => Comment)
  comment!: Comment
}
