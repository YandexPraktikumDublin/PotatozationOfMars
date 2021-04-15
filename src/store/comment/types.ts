import { IComment } from '@models'

export interface ICommentState {
  pending: boolean
  comment: IComment | null
  error: string | null
}
