import {
  UPDATE_IUSER_PASSWORD_REQUEST,
  UPDATE_IUSER_PASSWORD_SUCCESS,
  UPDATE_IUSER_PASSWORD_FAILURE
} from './actionTypes'
import { IUser } from '@models'

export interface IUpdateIUserPasswordRequestPayload {
  oldPassword: string
  newPassword: string
}

export interface IUpdateIUserPasswordSuccessPayload {
  iuser: IUser
}

export interface IUpdateIUserPasswordFailurePayload {
  error: string
}

export type TUpdateIUserPasswordRequest = {
  type: typeof UPDATE_IUSER_PASSWORD_REQUEST
  payload: IUpdateIUserPasswordRequestPayload
}

export type TUpdateIUserPasswordSuccess = {
  type: typeof UPDATE_IUSER_PASSWORD_SUCCESS
  payload: IUpdateIUserPasswordSuccessPayload
}

export type TUpdateIUserPasswordFailure = {
  type: typeof UPDATE_IUSER_PASSWORD_FAILURE
  payload: IUpdateIUserPasswordFailurePayload
}

export type TUpdateIUserPasswordActions =
  | TUpdateIUserPasswordRequest
  | TUpdateIUserPasswordSuccess
  | TUpdateIUserPasswordFailure
