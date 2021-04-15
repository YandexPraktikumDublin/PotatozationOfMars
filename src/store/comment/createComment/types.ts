import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from './actionTypes'
import { IComment } from '@models'

export interface ICreateCommentRequestPayload
  extends Omit<
    IComment,
    'id' | 'enjoyerId' | 'enjoyer' | 'createdAt' | 'updatedAt'
  > {}

export interface ICreateCommentSuccessPayload {
  comment: IComment
}

export interface ICreateCommentFailurePayload {
  error: string
}

export type TCreateCommentRequest = {
  type: typeof CREATE_COMMENT_REQUEST
  payload: ICreateCommentRequestPayload
}

export type TCreateCommentSuccess = {
  type: typeof CREATE_COMMENT_SUCCESS
  payload: ICreateCommentSuccessPayload
}

export type TCreateCommentFailure = {
  type: typeof CREATE_COMMENT_FAILURE
  payload: ICreateCommentFailurePayload
}

export type TCreateCommentActions =
  | TCreateCommentRequest
  | TCreateCommentSuccess
  | TCreateCommentFailure
