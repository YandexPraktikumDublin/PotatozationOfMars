import {
  ADD_COMMENT,
  ADD_COMMENTS,
  ADD_REACTION,
  REMOVE_REACTION
} from './actionTypes'
import { IComment, IReaction } from '@models'

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

export interface IAddReactionPayload {
  reaction: IReaction
}

export type TAddReaction = {
  type: typeof ADD_REACTION
  payload: IAddReactionPayload
}

export interface IRemoveReactionPayload {
  reaction: IReaction
}

export type TRemoveReaction = {
  type: typeof REMOVE_REACTION
  payload: IRemoveReactionPayload
}

export type TActions =
  | TAddComment
  | TAddComments
  | TAddReaction
  | TRemoveReaction
