import { ADD_COMMENTS } from './actionTypes'
import { IAddCommentsPayload, TAddComments } from './types'

export const addComments = (payload: IAddCommentsPayload): TAddComments => ({
  type: ADD_COMMENTS,
  payload
})
