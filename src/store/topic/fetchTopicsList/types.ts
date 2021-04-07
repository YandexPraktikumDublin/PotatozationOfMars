import {
  FETCH_TOPICS_LIST_REQUEST,
  FETCH_TOPICS_LIST_SUCCESS,
  FETCH_TOPICS_LIST_FAILURE
} from './actionTypes'

export interface ITopicsListState {
  pending: boolean
  error: string
  topics: any[]
}

export interface IFetchTopicsListSuccessPayload {
  topics: any[]
}

export interface IFetchTopicsListFailurePayload {
  error: string
}

export type TFetchTopicsListRequest = {
  type: typeof FETCH_TOPICS_LIST_REQUEST
}

export type TFetchTopicsListSuccess = {
  type: typeof FETCH_TOPICS_LIST_SUCCESS
  payload: IFetchTopicsListSuccessPayload
}

export type TFetchTopicsListFailure = {
  type: typeof FETCH_TOPICS_LIST_FAILURE
  payload: IFetchTopicsListFailurePayload
}

export type TFetchTopicsListActions =
  | TFetchTopicsListRequest
  | TFetchTopicsListSuccess
  | TFetchTopicsListFailure
