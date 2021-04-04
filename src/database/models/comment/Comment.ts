import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'

import { User, Topic } from '@models'

interface IComment extends Model {
  text: string
}

@Table
export class Comment extends Model<IComment> {
  @Column(DataType.STRING)
  text!: string

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topicId!: number

  @BelongsTo(() => Topic)
  topic!: Topic
}
