import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './actionTypes'

export interface IUpdateUserRequestPayload {
  id?: number
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

export interface IUpdateUserSuccessPayload {
  id?: number
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

export interface IUpdateUserFailurePayload {
  error: string
}

export type TUpdateUserRequest = {
  type: typeof UPDATE_USER_REQUEST
  payload: IUpdateUserRequestPayload
}

export type TUpdateUserSuccess = {
  type: typeof UPDATE_USER_SUCCESS
  payload: IUpdateUserSuccessPayload
}

export type TUpdateUserFailure = {
  type: typeof UPDATE_USER_FAILURE
  payload: IUpdateUserFailurePayload
}

export type TUpdateUserActions =
  | TUpdateUserRequest
  | TUpdateUserSuccess
  | TUpdateUserFailure
