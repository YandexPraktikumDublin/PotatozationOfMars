import {
  TOPICS_LIST_REQUEST,
  TOPICS_LIST_SUCCESS,
  TOPICS_LIST_FAILURE
} from './actionTypes'

export interface ITopicsListState {
  pending: boolean
  error: string
  topics: []
}

export interface ITopicsListSuccessPayload {
  topics: []
}

export interface ITopicsListFailurePayload {
  error: string
}

export type TTopicsListRequest = {
  type: typeof TOPICS_LIST_REQUEST
}

export type TTopicsListSuccess = {
  type: typeof TOPICS_LIST_SUCCESS
  payload: ITopicsListSuccessPayload
}

export type TTopicsListFailure = {
  type: typeof TOPICS_LIST_FAILURE
  payload: ITopicsListFailurePayload
}

export type TTopicsListActions =
  | TTopicsListRequest
  | TTopicsListSuccess
  | TTopicsListFailure
