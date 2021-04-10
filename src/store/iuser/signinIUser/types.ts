import {
  SIGNIN_IUSER_REQUEST,
  SIGNIN_IUSER_SUCCESS,
  SIGNIN_IUSER_FAILURE
} from './actionTypes'
import { IUser } from '@models'

export interface ISigninIUserRequestPayload {
  login: string
  password: string
}

export interface ISigninIUserSuccessPayload {
  iuser: IUser
}

export interface ISigninIUserFailurePayload {
  error: string
}

export type TSigninIUserRequest = {
  type: typeof SIGNIN_IUSER_REQUEST
  payload: ISigninIUserRequestPayload
}

export type TSigninIUserSuccess = {
  type: typeof SIGNIN_IUSER_SUCCESS
  payload: ISigninIUserSuccessPayload
}

export type TSigninIUserFailure = {
  type: typeof SIGNIN_IUSER_FAILURE
  payload: ISigninIUserFailurePayload
}

export type TSigninIUserActions =
  | TSigninIUserRequest
  | TSigninIUserSuccess
  | TSigninIUserFailure
