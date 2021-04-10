import {
  FETCH_IUSER_REQUEST,
  FETCH_IUSER_SUCCESS,
  FETCH_IUSER_FAILURE
} from './actionTypes'
import { IUser } from '@models'

export interface IFetchIUserSuccessPayload {
  iuser: IUser
}

export interface IFetchIUserFailurePayload {
  error: string
}

export type TFetchIUserRequest = {
  type: typeof FETCH_IUSER_REQUEST
}

export type TFetchIUserSuccess = {
  type: typeof FETCH_IUSER_SUCCESS
  payload: IFetchIUserSuccessPayload
}

export type TFetchIUserFailure = {
  type: typeof FETCH_IUSER_FAILURE
  payload: IFetchIUserFailurePayload
}

export type TIUserActions =
  | TFetchIUserRequest
  | TFetchIUserSuccess
  | TFetchIUserFailure
