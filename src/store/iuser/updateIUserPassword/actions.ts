import {
  UPDATE_IUSER_PASSWORD_REQUEST,
  UPDATE_IUSER_PASSWORD_SUCCESS,
  UPDATE_IUSER_PASSWORD_FAILURE
} from './actionTypes'
import {
  TUpdateIUserPasswordRequest,
  IUpdateIUserPasswordRequestPayload,
  TUpdateIUserPasswordSuccess,
  IUpdateIUserPasswordSuccessPayload,
  TUpdateIUserPasswordFailure,
  IUpdateIUserPasswordFailurePayload
} from './types'

export const updateIUserPasswordRequest = (
  payload: IUpdateIUserPasswordRequestPayload
): TUpdateIUserPasswordRequest => ({
  type: UPDATE_IUSER_PASSWORD_REQUEST,
  payload
})

export const updateIUserPasswordSuccess = (
  payload: IUpdateIUserPasswordSuccessPayload
): TUpdateIUserPasswordSuccess => ({
  type: UPDATE_IUSER_PASSWORD_SUCCESS,
  payload
})

export const updateIUserPasswordFailure = (
  payload: IUpdateIUserPasswordFailurePayload
): TUpdateIUserPasswordFailure => ({
  type: UPDATE_IUSER_PASSWORD_FAILURE,
  payload
})
