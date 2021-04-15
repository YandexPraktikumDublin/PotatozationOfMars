import {
  FETCH_REACTION_REQUEST,
  FETCH_REACTION_SUCCESS,
  FETCH_REACTION_FAILURE
} from './actionTypes'
import {
  IFetchReactionRequestPayload,
  IFetchReactionSuccessPayload,
  IFetchReactionFailurePayload,
  TFetchReactionRequest,
  TFetchReactionSuccess,
  TFetchReactionFailure
} from './types'

export const fetchReactionRequest = (
  payload: IFetchReactionRequestPayload
): TFetchReactionRequest => ({
  type: FETCH_REACTION_REQUEST,
  payload
})

export const fetchReactionSuccess = (
  payload: IFetchReactionSuccessPayload
): TFetchReactionSuccess => ({
  type: FETCH_REACTION_SUCCESS,
  payload
})

export const fetchReactionFailure = (
  payload: IFetchReactionFailurePayload
): TFetchReactionFailure => ({
  type: FETCH_REACTION_FAILURE,
  payload
})
