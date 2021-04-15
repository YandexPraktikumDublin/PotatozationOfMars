import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './actionTypes'
import { IComment } from '@models'

export interface IFetchCommentsRequestPayload {
  topicId: number
}

export interface IFetchCommentsSuccessPayload {
  comments: IComment[]
}

export interface IFetchCommentsFailurePayload {
  error: string
}

export type TFetchCommentsRequest = {
  type: typeof FETCH_COMMENTS_REQUEST
  payload: IFetchCommentsRequestPayload
}

export type TFetchCommentsSuccess = {
  type: typeof FETCH_COMMENTS_SUCCESS
  payload: IFetchCommentsSuccessPayload
}

export type TFetchCommentsFailure = {
  type: typeof FETCH_COMMENTS_FAILURE
  payload: IFetchCommentsFailurePayload
}

export type TFetchCommentsActions =
  | TFetchCommentsRequest
  | TFetchCommentsSuccess
  | TFetchCommentsFailure
