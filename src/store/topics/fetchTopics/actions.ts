import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE
} from './actionTypes'
import {
  IFetchTopicsSuccessPayload,
  IFetchTopicsFailurePayload,
  TFetchTopicsRequest,
  TFetchTopicsSuccess,
  TFetchTopicsFailure
} from './types'

export const fetchTopicsRequest = (): TFetchTopicsRequest => ({
  type: FETCH_TOPICS_REQUEST
})

export const fetchTopicsSuccess = (
  payload: IFetchTopicsSuccessPayload
): TFetchTopicsSuccess => ({
  type: FETCH_TOPICS_SUCCESS,
  payload
})

export const fetchTopicsFailure = (
  payload: IFetchTopicsFailurePayload
): TFetchTopicsFailure => ({
  type: FETCH_TOPICS_FAILURE,
  payload
})
