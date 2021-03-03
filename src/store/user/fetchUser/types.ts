import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './actionTypes'
import { IServerUser, IUser } from '@types'

export interface IUserState {
  pending: boolean
  user: IUser | null
  error: string | null
}

export interface IFetchUserSuccessPayload {
  user: IServerUser
}

export interface IFetchUserFailurePayload {
  error: string
}

export type TFetchUserRequest = {
  type: typeof FETCH_USER_REQUEST
}

export type TFetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS
  payload: IFetchUserSuccessPayload
}

export type TFetchUserFailure = {
  type: typeof FETCH_USER_FAILURE
  payload: IFetchUserFailurePayload
}

export type TUserActions =
  | TFetchUserRequest
  | TFetchUserSuccess
  | TFetchUserFailure
