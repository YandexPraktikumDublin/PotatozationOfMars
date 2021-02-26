import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './actionTypes'

export interface ILogoutState {
  pending: boolean
  error: string | null
}

export interface ILogoutSuccessPayload {
  status: string
}

export interface ILogoutFailurePayload {
  error: string
}

export type TLogoutRequest = {
  type: typeof LOGOUT_REQUEST
}

export type TLogoutSuccess = {
  type: typeof LOGOUT_SUCCESS
  payload: ILogoutSuccessPayload
}

export type TLogoutFailure = {
  type: typeof LOGOUT_FAILURE
  payload: ILogoutFailurePayload
}

export type TLogoutActions = TLogoutRequest | TLogoutSuccess | TLogoutFailure
