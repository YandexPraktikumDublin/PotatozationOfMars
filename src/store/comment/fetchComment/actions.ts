import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE
} from './actionTypes'
import {
  IFetchCommentRequestPayload,
  IFetchCommentSuccessPayload,
  IFetchCommentFailurePayload,
  TFetchCommentRequest,
  TFetchCommentSuccess,
  TFetchCommentFailure
} from './types'

export const fetchCommentRequest = (
  payload: IFetchCommentRequestPayload
): TFetchCommentRequest => ({
  type: FETCH_COMMENT_REQUEST,
  payload
})

export const fetchCommentSuccess = (
  payload: IFetchCommentSuccessPayload
): TFetchCommentSuccess => ({
  type: FETCH_COMMENT_SUCCESS,
  payload
})

export const fetchCommentFailure = (
  payload: IFetchCommentFailurePayload
): TFetchCommentFailure => ({
  type: FETCH_COMMENT_FAILURE,
  payload
})
