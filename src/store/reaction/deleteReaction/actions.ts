import {
  DELETE_REACTION_REQUEST,
  DELETE_REACTION_SUCCESS,
  DELETE_REACTION_FAILURE
} from './actionTypes'
import {
  IDeleteReactionRequestPayload,
  IDeleteReactionFailurePayload,
  TDeleteReactionRequest,
  TDeleteReactionSuccess,
  TDeleteReactionFailure
} from './types'

export const deleteReactionRequest = (
  payload: IDeleteReactionRequestPayload
): TDeleteReactionRequest => ({
  type: DELETE_REACTION_REQUEST,
  payload
})

export const deleteReactionSuccess = (): TDeleteReactionSuccess => ({
  type: DELETE_REACTION_SUCCESS
})

export const deleteReactionFailure = (
  payload: IDeleteReactionFailurePayload
): TDeleteReactionFailure => ({
  type: DELETE_REACTION_FAILURE,
  payload
})
