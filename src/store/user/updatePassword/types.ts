import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE
} from './actionTypes'

export interface IUpdatePasswordRequestPayload {
  oldPassword: string
  newPassword: string
}

export interface IUpdatePasswordSuccessPayload {
  payload: string
}

export interface IUpdatePasswordFailurePayload {
  error: string
}

export type TUpdatePasswordRequest = {
  type: typeof UPDATE_PASSWORD_REQUEST
  payload: IUpdatePasswordRequestPayload
}

export type TUpdatePasswordSuccess = {
  type: typeof UPDATE_PASSWORD_SUCCESS
  payload: IUpdatePasswordSuccessPayload
}

export type TUpdatePasswordFailure = {
  type: typeof UPDATE_PASSWORD_FAILURE
  payload: IUpdatePasswordFailurePayload
}

export type TUpdatePasswordActions =
  | TUpdatePasswordRequest
  | TUpdatePasswordSuccess
  | TUpdatePasswordFailure
