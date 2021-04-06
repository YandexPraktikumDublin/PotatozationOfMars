import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './actionTypes'

export interface IAuthState {
  pending: boolean
  userId: number | null
  error: string | null
}

export interface IAuthRequestPayload {
  login: string
  password: string
}

export interface IInnerAuthRequestPayload {
  login: string
  password: string
}

export interface IAuthSuccessPayload {
  id: number
}

export interface IAuthFailurePayload {
  error: string
}

export type TAuthRequest = {
  type: typeof AUTH_REQUEST
  payload: IAuthRequestPayload
}

export type TAuthSuccess = {
  type: typeof AUTH_SUCCESS
  payload: IAuthSuccessPayload
}

export type TAuthFailure = {
  type: typeof AUTH_FAILURE
  payload: IAuthFailurePayload
}

export type TAuthActions = TAuthRequest | TAuthSuccess | TAuthFailure
