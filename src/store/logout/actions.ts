import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './actionTypes'
import {
  ILogoutSuccessPayload,
  ILogoutFailurePayload,
  TLogoutRequest,
  TLogoutSuccess,
  TLogoutFailure
} from './types'

export const logoutRequest = (): TLogoutRequest => ({
  type: LOGOUT_REQUEST
})

export const logoutSuccess = (
  payload: ILogoutSuccessPayload
): TLogoutSuccess => ({
  type: LOGOUT_SUCCESS,
  payload
})

export const logoutFailure = (
  payload: ILogoutFailurePayload
): TLogoutFailure => ({
  type: LOGOUT_FAILURE,
  payload
})
