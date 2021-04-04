import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  AllowNull
} from 'sequelize-typescript'

import { User, Comment } from '@models'

export interface IReaction {
  content: string
}

@Table
export class Reaction extends Model<IReaction> {
  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  commentId!: number

  @BelongsTo(() => Comment)
  comment!: Comment
}
