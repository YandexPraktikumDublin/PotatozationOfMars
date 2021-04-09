import {
  FETCH_REACTIONS_REQUEST,
  FETCH_REACTIONS_SUCCESS,
  FETCH_REACTIONS_FAILURE
} from './actionTypes'
import {
  IFetchReactionsRequestPayload,
  IFetchReactionsSuccessPayload,
  IFetchReactionsFailurePayload,
  TFetchReactionsRequest,
  TFetchReactionsSuccess,
  TFetchReactionsFailure
} from './types'

export const fetchReactionsRequest = (
  payload: IFetchReactionsRequestPayload
): TFetchReactionsRequest => ({
  type: FETCH_REACTIONS_REQUEST,
  payload
})

export const fetchReactionsSuccess = (
  payload: IFetchReactionsSuccessPayload
): TFetchReactionsSuccess => ({
  type: FETCH_REACTIONS_SUCCESS,
  payload
})

export const fetchReactionsFailure = (
  payload: IFetchReactionsFailurePayload
): TFetchReactionsFailure => ({
  type: FETCH_REACTIONS_FAILURE,
  payload
})
