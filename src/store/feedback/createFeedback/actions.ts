import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE
} from './actionTypes'
import {
  ICreateFeedbackRequestPayload,
  ICreateFeedbackSuccessPayload,
  ICreateFeedbackFailurePayload,
  TCreateFeedbackRequest,
  TCreateFeedbackSuccess,
  TCreateFeedbackFailure
} from './types'

export const createFeedbackRequest = (
  payload: ICreateFeedbackRequestPayload
): TCreateFeedbackRequest => ({
  type: CREATE_FEEDBACK_REQUEST,
  payload
})

export const createFeedbackSuccess = (
  payload: ICreateFeedbackSuccessPayload
): TCreateFeedbackSuccess => ({
  type: CREATE_FEEDBACK_SUCCESS,
  payload
})

export const createFeedbackFailure = (
  payload: ICreateFeedbackFailurePayload
): TCreateFeedbackFailure => ({
  type: CREATE_FEEDBACK_FAILURE,
  payload
})
