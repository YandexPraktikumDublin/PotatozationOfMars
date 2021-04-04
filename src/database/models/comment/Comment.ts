import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface IComment extends Model {
  authorName: string
  text: string
  reply: number
}

@Table
export class Comment extends Model<IComment> {
  @Column(DataType.INTEGER)
  authorName!: number

  @Column(DataType.STRING)
  text!: string

  @Column(DataType.NUMBER)
  reply!: number
}
