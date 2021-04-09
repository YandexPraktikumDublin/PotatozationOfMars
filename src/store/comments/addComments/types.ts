import { ADD_COMMENTS } from './actionTypes'
import { IComment } from '@models'

export interface IAddCommentsPayload {
  comments: IComment[]
}

export type TAddComments = {
  type: typeof ADD_COMMENTS
  payload: IAddCommentsPayload
}

export type TAddCommentsActions = TAddComments
