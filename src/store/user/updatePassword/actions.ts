import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE
} from './actionTypes'
import {
  TUpdatePasswordRequest,
  IUpdatePasswordRequestPayload,
  TUpdatePasswordSuccess,
  IUpdatePasswordSuccessPayload,
  TUpdatePasswordFailure,
  IUpdatePasswordFailurePayload
} from './types'

export const updatePasswordRequest = (
  payload: IUpdatePasswordRequestPayload
): TUpdatePasswordRequest => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload
})

export const updatePasswordSuccess = (
  payload: IUpdatePasswordSuccessPayload
): TUpdatePasswordSuccess => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload
})

export const updatePasswordFailure = (
  payload: IUpdatePasswordFailurePayload
): TUpdatePasswordFailure => ({
  type: UPDATE_PASSWORD_FAILURE,
  payload
})
