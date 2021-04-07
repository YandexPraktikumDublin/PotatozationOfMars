import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './actionTypes'
import { IComment } from '@models'

export interface IFetchCommentsSuccessPayload {
  comments: IComment[]
}

export interface IFetchCommentsFailurePayload {
  error: string
}

export type TFetchCommentsRequest = {
  type: typeof FETCH_COMMENTS_REQUEST
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
