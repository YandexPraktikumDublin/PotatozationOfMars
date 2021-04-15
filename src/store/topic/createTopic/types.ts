import {
  CREATE_TOPIC_REQUEST,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_FAILURE
} from './actionTypes'
import { ITopic } from '@models'

export interface ICreateTopicRequestPayload
  extends Omit<
    ITopic,
    'id' | 'enjoyerId' | 'enjoyer' | 'createdAt' | 'updatedAt'
  > {}

export interface ICreateTopicSuccessPayload {
  topic: ITopic
}

export interface ICreateTopicFailurePayload {
  error: string
}

export type TCreateTopicRequest = {
  type: typeof CREATE_TOPIC_REQUEST
  payload: ICreateTopicRequestPayload
}

export type TCreateTopicSuccess = {
  type: typeof CREATE_TOPIC_SUCCESS
  payload: ICreateTopicSuccessPayload
}

export type TCreateTopicFailure = {
  type: typeof CREATE_TOPIC_FAILURE
  payload: ICreateTopicFailurePayload
}

export type TCreateTopicActions =
  | TCreateTopicRequest
  | TCreateTopicSuccess
  | TCreateTopicFailure
