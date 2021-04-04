import { Model, Table, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Comment } from '@models'

interface ITopic extends Model {
  authorName: string
  theme: string
  text: string
  comments: Comment[]
}

@Table
export class Topic extends Model<ITopic> {
  @Column(DataType.INTEGER)
  authorName!: number

  @Column(DataType.STRING)
  theme!: string

  @Column(DataType.STRING)
  text!: string

  @BelongsTo(() => Comment)
  comments!: Comment
}
