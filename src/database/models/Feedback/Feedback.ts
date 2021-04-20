import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript'

export interface IFeedback {
  id?: number
  content: string
  name: string
  email: string
  createdAt?: string
  updatedAt?: string
}

@Table
export class Feedback extends Model<IFeedback> {
  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string
}
