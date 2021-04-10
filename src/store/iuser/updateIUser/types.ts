import {
  UPDATE_IUSER_REQUEST,
  UPDATE_IUSER_SUCCESS,
  UPDATE_IUSER_FAILURE
} from './actionTypes'
import { IUser } from '@models'

export interface IUpdateIUserRequestPayload {
  login?: string
  name?: string
}

export interface IUpdateIUserSuccessPayload {
  iuser: IUser
}

export interface IUpdateIUserFailurePayload {
  error: string
}

export type TUpdateIUserRequest = {
  type: typeof UPDATE_IUSER_REQUEST
  payload: IUpdateIUserRequestPayload
}

export type TUpdateIUserSuccess = {
  type: typeof UPDATE_IUSER_SUCCESS
  payload: IUpdateIUserSuccessPayload
}

export type TUpdateIUserFailure = {
  type: typeof UPDATE_IUSER_FAILURE
  payload: IUpdateIUserFailurePayload
}

export type TUpdateIUserActions =
  | TUpdateIUserRequest
  | TUpdateIUserSuccess
  | TUpdateIUserFailure
