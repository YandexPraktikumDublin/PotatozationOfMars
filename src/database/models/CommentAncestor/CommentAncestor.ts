import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript'

export interface ICommentAncestor extends Model {
  commentId: number
  ancestorId: number
}

@Table
export class CommentAncestor extends Model<ICommentAncestor> {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  commentId!: number

  @AllowNull(false)
  @Column(DataType.INTEGER)
  ancestorId!: number
}
