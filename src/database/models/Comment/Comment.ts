import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
  BelongsToMany,
  AllowNull,
  Default
} from 'sequelize-typescript'

import {
  User,
  Topic,
  CommentAncestor,
  Reaction,
  IUser,
  ITopic,
  IReaction
} from '@models'

export interface IComment {
  id?: number
  content: string
  userId: number
  user: Omit<IUser, 'passwordHash'>
  topicId: number
  topic?: ITopic
  parentId?: number
  hierarchyLevel?: number
  parent?: IComment
  children?: IComment[]
  descendents?: IComment[]
  ancestors?: IComment[]
  reactions?: IReaction[]
  createdAt?: string
  updatedAt?: string
}

@Table
export class Comment extends Model<IComment> {
  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number

  @BelongsTo(() => User)
  user!: User

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  topicId!: number

  @BelongsTo(() => Topic)
  topic!: Topic

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  parentId!: number

  @AllowNull(false)
  @Default(0)
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

  @HasMany(() => Reaction)
  reactions!: Reaction[]
}
