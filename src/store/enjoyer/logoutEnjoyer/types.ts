import {
  LOGOUT_ENJOYER_REQUEST,
  LOGOUT_ENJOYER_SUCCESS,
  LOGOUT_ENJOYER_FAILURE
} from './actionTypes'

export interface ILogoutEnjoyerFailurePayload {
  error: string
}

export type TLogoutEnjoyerRequest = {
  type: typeof LOGOUT_ENJOYER_REQUEST
}

export type TLogoutEnjoyerSuccess = {
  type: typeof LOGOUT_ENJOYER_SUCCESS
}

export type TLogoutEnjoyerFailure = {
  type: typeof LOGOUT_ENJOYER_FAILURE
  payload: ILogoutEnjoyerFailurePayload
}

export type TLogoutEnjoyerActions =
  | TLogoutEnjoyerRequest
  | TLogoutEnjoyerSuccess
  | TLogoutEnjoyerFailure
