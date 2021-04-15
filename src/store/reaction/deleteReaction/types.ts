import {
  DELETE_REACTION_REQUEST,
  DELETE_REACTION_SUCCESS,
  DELETE_REACTION_FAILURE
} from './actionTypes'
import { IReaction } from '@models'

export interface IDeleteReactionRequestPayload {
  reaction: IReaction
}

export interface IDeleteReactionFailurePayload {
  error: string
}

export type TDeleteReactionRequest = {
  type: typeof DELETE_REACTION_REQUEST
  payload: IDeleteReactionRequestPayload
}

export type TDeleteReactionSuccess = {
  type: typeof DELETE_REACTION_SUCCESS
}

export type TDeleteReactionFailure = {
  type: typeof DELETE_REACTION_FAILURE
  payload: IDeleteReactionFailurePayload
}

export type TDeleteReactionActions =
  | TDeleteReactionRequest
  | TDeleteReactionSuccess
  | TDeleteReactionFailure
