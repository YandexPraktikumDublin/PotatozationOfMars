import {
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILURE
} from './actionTypes'
import { ITopic } from '@models'

export interface IFetchTopicRequestPayload {
  id: number
}

export interface IFetchTopicSuccessPayload {
  topic: ITopic
}

export interface IFetchTopicFailurePayload {
  error: string
}

export type TFetchTopicRequest = {
  type: typeof FETCH_TOPIC_REQUEST
  payload: IFetchTopicRequestPayload
}

export type TFetchTopicSuccess = {
  type: typeof FETCH_TOPIC_SUCCESS
  payload: IFetchTopicSuccessPayload
}

export type TFetchTopicFailure = {
  type: typeof FETCH_TOPIC_FAILURE
  payload: IFetchTopicFailurePayload
}

export type TFetchTopicActions =
  | TFetchTopicRequest
  | TFetchTopicSuccess
  | TFetchTopicFailure
