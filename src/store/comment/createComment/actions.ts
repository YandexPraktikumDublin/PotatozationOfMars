import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from './actionTypes'
import {
  ICreateCommentRequestPayload,
  ICreateCommentSuccessPayload,
  ICreateCommentFailurePayload,
  TCreateCommentRequest,
  TCreateCommentSuccess,
  TCreateCommentFailure
} from './types'

export const createCommentRequest = (
  payload: ICreateCommentRequestPayload
): TCreateCommentRequest => ({
  type: CREATE_COMMENT_REQUEST,
  payload
})

export const createCommentSuccess = (
  payload: ICreateCommentSuccessPayload
): TCreateCommentSuccess => ({
  type: CREATE_COMMENT_SUCCESS,
  payload
})

export const createCommentFailure = (
  payload: ICreateCommentFailurePayload
): TCreateCommentFailure => ({
  type: CREATE_COMMENT_FAILURE,
  payload
})
