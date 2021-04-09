import { ADD_COMMENT, ADD_COMMENTS } from './actionTypes'
import {
  IAddCommentPayload,
  TAddComment,
  IAddCommentsPayload,
  TAddComments
} from './types'

export const addComment = (payload: IAddCommentPayload): TAddComment => ({
  type: ADD_COMMENT,
  payload
})

export const addComments = (payload: IAddCommentsPayload): TAddComments => ({
  type: ADD_COMMENTS,
  payload
})
