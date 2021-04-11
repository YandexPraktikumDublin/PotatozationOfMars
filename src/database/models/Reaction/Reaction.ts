import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  AllowNull,
  Default
} from 'sequelize-typescript'

import { User, Comment, IUser, IComment } from '@models'

export interface IReaction {
  id?: number
  content: string
  userId: number
  user?: Omit<IUser, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
  hierarchyLevel?: number
  commentId: number
  comment?: IComment
  createdAt?: string
  updatedAt?: string
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

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  hierarchyLevel!: number

  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  commentId!: number

  @BelongsTo(() => Comment)
  comment!: Comment
}
