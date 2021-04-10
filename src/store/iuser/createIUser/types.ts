import {
  CREATE_IUSER_REQUEST,
  CREATE_IUSER_SUCCESS,
  CREATE_IUSER_FAILURE
} from './actionTypes'
import { IUser } from '@models'

export interface ICreateIUserRequestPayload {
  login: string
  name: string
  password: string
}

export interface ICreateIUserSuccessPayload {
  iuser: IUser
}

export interface ICreateIUserFailurePayload {
  error: string
}

export type TCreateIUserRequest = {
  type: typeof CREATE_IUSER_REQUEST
  payload: ICreateIUserRequestPayload
}

export type TCreateIUserSuccess = {
  type: typeof CREATE_IUSER_SUCCESS
  payload: ICreateIUserSuccessPayload
}

export type TCreateIUserFailure = {
  type: typeof CREATE_IUSER_FAILURE
  payload: ICreateIUserFailurePayload
}

export type TCreateIUserActions =
  | TCreateIUserRequest
  | TCreateIUserSuccess
  | TCreateIUserFailure
