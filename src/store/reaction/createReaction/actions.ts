import {
  CREATE_REACTION_REQUEST,
  CREATE_REACTION_SUCCESS,
  CREATE_REACTION_FAILURE
} from './actionTypes'
import {
  ICreateReactionRequestPayload,
  ICreateReactionSuccessPayload,
  ICreateReactionFailurePayload,
  TCreateReactionRequest,
  TCreateReactionSuccess,
  TCreateReactionFailure
} from './types'

export const createReactionRequest = (
  payload: ICreateReactionRequestPayload
): TCreateReactionRequest => ({
  type: CREATE_REACTION_REQUEST,
  payload
})

export const createReactionSuccess = (
  payload: ICreateReactionSuccessPayload
): TCreateReactionSuccess => ({
  type: CREATE_REACTION_SUCCESS,
  payload
})

export const createReactionFailure = (
  payload: ICreateReactionFailurePayload
): TCreateReactionFailure => ({
  type: CREATE_REACTION_FAILURE,
  payload
})
