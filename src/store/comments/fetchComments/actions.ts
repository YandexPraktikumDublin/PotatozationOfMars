import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './actionTypes'
import {
  IFetchCommentsRequestPayload,
  IFetchCommentsSuccessPayload,
  IFetchCommentsFailurePayload,
  TFetchCommentsRequest,
  TFetchCommentsSuccess,
  TFetchCommentsFailure
} from './types'

export const fetchCommentsRequest = (
  payload: IFetchCommentsRequestPayload
): TFetchCommentsRequest => ({
  type: FETCH_COMMENTS_REQUEST,
  payload
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
