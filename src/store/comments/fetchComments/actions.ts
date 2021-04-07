import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './actionTypes'
import {
  IFetchCommentsSuccessPayload,
  IFetchCommentsFailurePayload,
  TFetchCommentsRequest,
  TFetchCommentsSuccess,
  TFetchCommentsFailure
} from './types'

export const fetchCommentsRequest = (): TFetchCommentsRequest => ({
  type: FETCH_COMMENTS_REQUEST
})

export const fetchCommentsSuccess = (
  payload: IFetchCommentsSuccessPayload
): TFetchCommentsSuccess => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload
})

export const fetchCommentsFailure = (
  payload: IFetchCommentsFailurePayload
): TFetchCommentsFailure => ({
  type: FETCH_COMMENTS_FAILURE,
  payload
})
