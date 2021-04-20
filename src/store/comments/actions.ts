import {
  ADD_COMMENT,
  ADD_COMMENTS,
  ADD_REACTION,
  REMOVE_REACTION
} from './actionTypes'
import {
  IAddCommentPayload,
  TAddComment,
  IAddCommentsPayload,
  TAddComments,
  IAddReactionPayload,
  TAddReaction,
  IRemoveReactionPayload,
  TRemoveReaction
} from './types'

export const addComment = (payload: IAddCommentPayload): TAddComment => ({
  type: ADD_COMMENT,
  payload
})

export const addComments = (payload: IAddCommentsPayload): TAddComments => ({
  type: ADD_COMMENTS,
  payload
})

export const addReaction = (payload: IAddReactionPayload): TAddReaction => ({
  type: ADD_REACTION,
  payload
})

export const removeReaction = (
  payload: IRemoveReactionPayload
): TRemoveReaction => ({
  type: REMOVE_REACTION,
  payload
})
