import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface ICommentAncestor extends Model {
  commentId: number
  ancestorId: number
}

@Table
export class CommentAncestor extends Model<ICommentAncestor> {
  @Column(DataType.INTEGER)
  commentId!: number

  @Column(DataType.INTEGER)
  ancestorId!: number
}
