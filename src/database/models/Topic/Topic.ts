import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  AllowNull,
  HasMany
} from 'sequelize-typescript'
import { Enjoyer, Comment, IEnjoyer, IComment } from '@models'

export interface ITopic {
  id?: number
  subject: string
  content: string
  enjoyerId: number
  enjoyer?: Omit<IEnjoyer, 'passwordHash' | 'role' | 'createdAt' | 'updatedAt'>
  comments?: IComment[]
  createdAt?: string
  updatedAt?: string
}

@Table
export class Topic extends Model<ITopic> {
  @AllowNull(false)
  @Column(DataType.STRING)
  subject!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string

  @ForeignKey(() => Enjoyer)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  enjoyerId!: number

  @BelongsTo(() => Enjoyer)
  enjoyer!: Enjoyer

  @HasMany(() => Comment)
  comments!: Comment[]
}
