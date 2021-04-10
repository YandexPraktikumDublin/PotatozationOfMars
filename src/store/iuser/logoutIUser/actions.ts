import {
  LOGOUT_IUSER_REQUEST,
  LOGOUT_IUSER_SUCCESS,
  LOGOUT_IUSER_FAILURE
} from './actionTypes'
import {
  TLogoutIUserRequest,
  TLogoutIUserSuccess,
  TLogoutIUserFailure,
  ILogoutIUserFailurePayload
} from './types'

export const logoutIUserRequest = (): TLogoutIUserRequest => ({
  type: LOGOUT_IUSER_REQUEST
})

export const logoutIUserSuccess = (): TLogoutIUserSuccess => ({
  type: LOGOUT_IUSER_SUCCESS
})

export const logoutIUserFailure = (
  payload: ILogoutIUserFailurePayload
): TLogoutIUserFailure => ({
  type: LOGOUT_IUSER_FAILURE,
  payload
})
