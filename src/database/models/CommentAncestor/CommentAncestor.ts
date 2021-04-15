import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey
} from 'sequelize-typescript'

import { Comment } from '@models'

export interface ICommentAncestor {
  id?: number
  commentId: number
  ancestorId: number
  createdAt?: string
  updatedAt?: string
}

@Table
export class CommentAncestor extends Model<ICommentAncestor> {
  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  commentId!: number

  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  ancestorId!: number
}
