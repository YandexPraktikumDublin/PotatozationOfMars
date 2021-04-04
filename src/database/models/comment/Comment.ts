import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
  BelongsToMany
} from 'sequelize-typescript'

import { User, Topic, CommentAncestor } from '@models'

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

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  parentId!: number

  @Column(DataType.INTEGER)
  hierarchyLevel!: number

  @BelongsTo(() => Comment, 'parentId')
  parent!: Comment

  @HasMany(() => Comment, 'parentId')
  children!: Comment[]

  @BelongsToMany(() => Comment, () => CommentAncestor, 'ancestorId')
  descendents!: Comment[]

  @BelongsToMany(() => Comment, () => CommentAncestor, 'commentId')
  ancestors!: Comment[]
}
