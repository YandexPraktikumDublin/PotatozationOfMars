import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE
} from './actionTypes'
import { ITopic } from '@models'

export interface ITopicsState {
  pending: boolean
  topics: ITopic[]
  error: string | null
}

export interface IFetchTopicsSuccessPayload {
  topics: ITopic[]
}

export interface IFetchTopicsFailurePayload {
  error: string
}

export type TFetchTopicsRequest = {
  type: typeof FETCH_TOPICS_REQUEST
}

export type TFetchTopicsSuccess = {
  type: typeof FETCH_TOPICS_SUCCESS
  payload: IFetchTopicsSuccessPayload
}

export type TFetchTopicsFailure = {
  type: typeof FETCH_TOPICS_FAILURE
  payload: IFetchTopicsFailurePayload
}

export type TFetchTopicsActions =
  | TFetchTopicsRequest
  | TFetchTopicsSuccess
  | TFetchTopicsFailure
