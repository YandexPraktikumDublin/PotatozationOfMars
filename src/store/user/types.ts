import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './actionTypes'
import { IUser } from '@types'

export interface IUserState {
  pending: boolean
  user: IUser | null
  error: string | null
}

export interface FetchUserSuccessPayload {
  user: Omit<IUser, 'firstName' | 'secondName' | 'displayName'> & {
    /* eslint-disable camelcase */
    first_name?: string
    second_name?: string
    display_name?: string
    /* eslint-enable camelcase */
  }
}

export interface FetchUserFailurePayload {
  error: string
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS
  payload: FetchUserSuccessPayload
}

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE
  payload: FetchUserFailurePayload
}

export type TUserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
