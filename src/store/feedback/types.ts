import { IFeedback } from '@models'

export interface IFeedbackState {
  pending: boolean
  feedback: IFeedback | null
  error: string | null
}
