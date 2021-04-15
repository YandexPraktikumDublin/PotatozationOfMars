import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE
} from './actionTypes'
import { IComment } from '@models'

export interface IFetchCommentRequestPayload {
  id: number
}

export interface IFetchCommentSuccessPayload {
  comment: IComment
}

export interface IFetchCommentFailurePayload {
  error: string
}

export type TFetchCommentRequest = {
  type: typeof FETCH_COMMENT_REQUEST
  payload: IFetchCommentRequestPayload
}

export type TFetchCommentSuccess = {
  type: typeof FETCH_COMMENT_SUCCESS
  payload: IFetchCommentSuccessPayload
}

export type TFetchCommentFailure = {
  type: typeof FETCH_COMMENT_FAILURE
  payload: IFetchCommentFailurePayload
}

export type TFetchCommentActions =
  | TFetchCommentRequest
  | TFetchCommentSuccess
  | TFetchCommentFailure
