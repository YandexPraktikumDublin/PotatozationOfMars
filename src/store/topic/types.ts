import { ITopic } from '@models'

export interface ITopicState {
  pending: boolean
  topic: ITopic | null
  error: string | null
}
