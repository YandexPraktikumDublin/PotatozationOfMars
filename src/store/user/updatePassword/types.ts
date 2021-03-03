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
  user: {
    id: number
    /* eslint-disable camelcase */
    first_name?: string
    second_name?: string
    display_name?: string
    /* eslint-enable camelcase */
    login?: string
    email?: string
    phone?: string
    avatar?: string
  }
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
