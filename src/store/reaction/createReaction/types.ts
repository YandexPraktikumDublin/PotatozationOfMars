import {
  CREATE_REACTION_REQUEST,
  CREATE_REACTION_SUCCESS,
  CREATE_REACTION_FAILURE
} from './actionTypes'
import { IReaction } from '@models'

export interface ICreateReactionRequestPayload
  extends Omit<
    IReaction,
    'id' | 'userId' | 'user' | 'createdAt' | 'updatedAt'
  > {}

export interface ICreateReactionSuccessPayload {
  reaction: IReaction
}

export interface ICreateReactionFailurePayload {
  error: string
}

export type TCreateReactionRequest = {
  type: typeof CREATE_REACTION_REQUEST
  payload: ICreateReactionRequestPayload
}

export type TCreateReactionSuccess = {
  type: typeof CREATE_REACTION_SUCCESS
  payload: ICreateReactionSuccessPayload
}

export type TCreateReactionFailure = {
  type: typeof CREATE_REACTION_FAILURE
  payload: ICreateReactionFailurePayload
}

export type TCreateReactionActions =
  | TCreateReactionRequest
  | TCreateReactionSuccess
  | TCreateReactionFailure
