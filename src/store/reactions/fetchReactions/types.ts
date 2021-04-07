import {
  FETCH_REACTIONS_REQUEST,
  FETCH_REACTIONS_SUCCESS,
  FETCH_REACTIONS_FAILURE
} from './actionTypes'
import { IReaction } from '@models'

export interface IFetchReactionsSuccessPayload {
  reactions: IReaction[]
}

export interface IFetchReactionsFailurePayload {
  error: string
}

export type TFetchReactionsRequest = {
  type: typeof FETCH_REACTIONS_REQUEST
}

export type TFetchReactionsSuccess = {
  type: typeof FETCH_REACTIONS_SUCCESS
  payload: IFetchReactionsSuccessPayload
}

export type TFetchReactionsFailure = {
  type: typeof FETCH_REACTIONS_FAILURE
  payload: IFetchReactionsFailurePayload
}

export type TFetchReactionsActions =
  | TFetchReactionsRequest
  | TFetchReactionsSuccess
  | TFetchReactionsFailure
