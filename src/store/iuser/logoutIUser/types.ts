import {
  LOGOUT_IUSER_REQUEST,
  LOGOUT_IUSER_SUCCESS,
  LOGOUT_IUSER_FAILURE
} from './actionTypes'

export interface ILogoutIUserFailurePayload {
  error: string
}

export type TLogoutIUserRequest = {
  type: typeof LOGOUT_IUSER_REQUEST
}

export type TLogoutIUserSuccess = {
  type: typeof LOGOUT_IUSER_SUCCESS
}

export type TLogoutIUserFailure = {
  type: typeof LOGOUT_IUSER_FAILURE
  payload: ILogoutIUserFailurePayload
}

export type TLogoutIUserActions =
  | TLogoutIUserRequest
  | TLogoutIUserSuccess
  | TLogoutIUserFailure
