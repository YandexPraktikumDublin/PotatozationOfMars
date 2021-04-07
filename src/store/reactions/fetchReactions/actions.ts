import {
  FETCH_REACTIONS_REQUEST,
  FETCH_REACTIONS_SUCCESS,
  FETCH_REACTIONS_FAILURE
} from './actionTypes'
import {
  IFetchReactionsSuccessPayload,
  IFetchReactionsFailurePayload,
  TFetchReactionsRequest,
  TFetchReactionsSuccess,
  TFetchReactionsFailure
} from './types'

export const fetchReactionsRequest = (): TFetchReactionsRequest => ({
  type: FETCH_REACTIONS_REQUEST
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
