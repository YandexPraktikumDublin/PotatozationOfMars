import { IReaction } from '@models'

export interface IReactionState {
  pending: boolean
  reaction: IReaction | null
  error: string | null
}
