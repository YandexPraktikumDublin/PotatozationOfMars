import { ADD_COMMENT, ADD_COMMENTS } from './actionTypes'
import { IComment } from '@models'

export interface ICommentsState {
  pending: boolean
  comments: IComment[]
  error: string | null
}

export interface IAddCommentPayload {
  comment: IComment
}

export type TAddComment = {
  type: typeof ADD_COMMENT
  payload: IAddCommentPayload
}

export interface IAddCommentsPayload {
  comments: IComment[]
}

export type TAddComments = {
  type: typeof ADD_COMMENTS
  payload: IAddCommentsPayload
}

export type TActions = TAddComment | TAddComments
