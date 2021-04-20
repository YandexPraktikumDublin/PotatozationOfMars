import {
  FETCH_ENJOYER_REQUEST,
  FETCH_ENJOYER_SUCCESS,
  FETCH_ENJOYER_FAILURE
} from './actionTypes'
import { IEnjoyer } from '@models'

export interface IFetchEnjoyerSuccessPayload {
  enjoyer: IEnjoyer
}

export interface IFetchEnjoyerFailurePayload {
  error: string
}

export type TFetchEnjoyerRequest = {
  type: typeof FETCH_ENJOYER_REQUEST
}

export type TFetchEnjoyerSuccess = {
  type: typeof FETCH_ENJOYER_SUCCESS
  payload: IFetchEnjoyerSuccessPayload
}

export type TFetchEnjoyerFailure = {
  type: typeof FETCH_ENJOYER_FAILURE
  payload: IFetchEnjoyerFailurePayload
}

export type TEnjoyerActions =
  | TFetchEnjoyerRequest
  | TFetchEnjoyerSuccess
  | TFetchEnjoyerFailure
