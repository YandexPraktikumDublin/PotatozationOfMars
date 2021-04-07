import {
  FETCH_TOPICS_LIST_REQUEST,
  FETCH_TOPICS_LIST_SUCCESS,
  FETCH_TOPICS_LIST_FAILURE
} from './actionTypes'
import {
  IFetchTopicsListSuccessPayload,
  IFetchTopicsListFailurePayload,
  TFetchTopicsListRequest,
  TFetchTopicsListSuccess,
  TFetchTopicsListFailure
} from './types'

export const fetchTopicRequest = (): TFetchTopicsListRequest => ({
  type: FETCH_TOPICS_LIST_REQUEST
})

export const fetchTopicSuccess = (
  payload: IFetchTopicsListSuccessPayload
): TFetchTopicsListSuccess => ({
  type: FETCH_TOPICS_LIST_SUCCESS,
  payload
})

export const fetchTopicFailure = (
  payload: IFetchTopicsListFailurePayload
): TFetchTopicsListFailure => ({
  type: FETCH_TOPICS_LIST_FAILURE,
  payload
})
