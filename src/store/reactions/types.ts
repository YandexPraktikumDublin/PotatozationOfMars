import { IReaction } from '@models'

export interface IReactionsState {
  pending: boolean
  reactions: IReaction[]
  error: string | null
}
