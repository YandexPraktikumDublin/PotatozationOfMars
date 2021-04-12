import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE
} from './actionTypes'
import { IFeedback } from '@models'

export interface ICreateFeedbackRequestPayload
  extends Omit<IFeedback, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICreateFeedbackSuccessPayload {
  feedback: IFeedback
}

export interface ICreateFeedbackFailurePayload {
  error: string
}

export type TCreateFeedbackRequest = {
  type: typeof CREATE_FEEDBACK_REQUEST
  payload: ICreateFeedbackRequestPayload
}

export type TCreateFeedbackSuccess = {
  type: typeof CREATE_FEEDBACK_SUCCESS
  payload: ICreateFeedbackSuccessPayload
}

export type TCreateFeedbackFailure = {
  type: typeof CREATE_FEEDBACK_FAILURE
  payload: ICreateFeedbackFailurePayload
}

export type TCreateFeedbackActions =
  | TCreateFeedbackRequest
  | TCreateFeedbackSuccess
  | TCreateFeedbackFailure
