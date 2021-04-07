import { IComment } from '@models'

export interface ICommentsState {
  pending: boolean
  comments: IComment[]
  error: string | null
}
