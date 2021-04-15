import {
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILURE
} from './actionTypes'
import {
  IFetchTopicRequestPayload,
  IFetchTopicSuccessPayload,
  IFetchTopicFailurePayload,
  TFetchTopicRequest,
  TFetchTopicSuccess,
  TFetchTopicFailure
} from './types'

export const fetchTopicRequest = (
  payload: IFetchTopicRequestPayload
): TFetchTopicRequest => ({
  type: FETCH_TOPIC_REQUEST,
  payload
})

export const fetchTopicSuccess = (
  payload: IFetchTopicSuccessPayload
): TFetchTopicSuccess => ({
  type: FETCH_TOPIC_SUCCESS,
  payload
})

export const fetchTopicFailure = (
  payload: IFetchTopicFailurePayload
): TFetchTopicFailure => ({
  type: FETCH_TOPIC_FAILURE,
  payload
})
