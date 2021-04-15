import {
  LOGOUT_ENJOYER_REQUEST,
  LOGOUT_ENJOYER_SUCCESS,
  LOGOUT_ENJOYER_FAILURE
} from './actionTypes'
import {
  TLogoutEnjoyerRequest,
  TLogoutEnjoyerSuccess,
  TLogoutEnjoyerFailure,
  ILogoutEnjoyerFailurePayload
} from './types'

export const logoutEnjoyerRequest = (): TLogoutEnjoyerRequest => ({
  type: LOGOUT_ENJOYER_REQUEST
})

export const logoutEnjoyerSuccess = (): TLogoutEnjoyerSuccess => ({
  type: LOGOUT_ENJOYER_SUCCESS
})

export const logoutEnjoyerFailure = (
  payload: ILogoutEnjoyerFailurePayload
): TLogoutEnjoyerFailure => ({
  type: LOGOUT_ENJOYER_FAILURE,
  payload
})
