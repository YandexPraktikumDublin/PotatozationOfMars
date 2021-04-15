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

import { Enjoyer, Comment, IEnjoyer, IComment } from '@models'

export interface IReaction {
  id?: number
  content: string
  enjoyerId: number
  enjoyer?: Omit<IEnjoyer, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
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

  @ForeignKey(() => Enjoyer)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  enjoyerId!: number

  @BelongsTo(() => Enjoyer)
  enjoyer!: Enjoyer

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
