import {
  FETCH_REACTION_REQUEST,
  FETCH_REACTION_SUCCESS,
  FETCH_REACTION_FAILURE
} from './actionTypes'
import { IReaction } from '@models'

export interface IFetchReactionRequestPayload {
  id: number
}

export interface IFetchReactionSuccessPayload {
  reaction: IReaction
}

export interface IFetchReactionFailurePayload {
  error: string
}

export type TFetchReactionRequest = {
  type: typeof FETCH_REACTION_REQUEST
  payload: IFetchReactionRequestPayload
}

export type TFetchReactionSuccess = {
  type: typeof FETCH_REACTION_SUCCESS
  payload: IFetchReactionSuccessPayload
}

export type TFetchReactionFailure = {
  type: typeof FETCH_REACTION_FAILURE
  payload: IFetchReactionFailurePayload
}

export type TFetchReactionActions =
  | TFetchReactionRequest
  | TFetchReactionSuccess
  | TFetchReactionFailure
