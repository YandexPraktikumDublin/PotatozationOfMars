import { ITopic } from '@models'

export interface ITopicsState {
  pending: boolean
  topics: ITopic[]
  error: string | null
}
