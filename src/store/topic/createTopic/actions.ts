import {
  CREATE_TOPIC_REQUEST,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_FAILURE
} from './actionTypes'
import {
  ICreateTopicRequestPayload,
  ICreateTopicSuccessPayload,
  ICreateTopicFailurePayload,
  TCreateTopicRequest,
  TCreateTopicSuccess,
  TCreateTopicFailure
} from './types'

export const createTopicRequest = (
  payload: ICreateTopicRequestPayload
): TCreateTopicRequest => ({
  type: CREATE_TOPIC_REQUEST,
  payload
})

export const createTopicSuccess = (
  payload: ICreateTopicSuccessPayload
): TCreateTopicSuccess => ({
  type: CREATE_TOPIC_SUCCESS,
  payload
})

export const createTopicFailure = (
  payload: ICreateTopicFailurePayload
): TCreateTopicFailure => ({
  type: CREATE_TOPIC_FAILURE,
  payload
})
