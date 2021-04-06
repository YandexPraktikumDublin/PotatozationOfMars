import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes'

export interface ISignupState {
  pending: boolean
  userId: number | null
  error: string | null
}

export interface ISignupRequestPayload {
  /* eslint-disable camelcase */
  first_name: string
  second_name: string
  /* eslint-enable camelcase */
  login: string
  email: string
  phone: string
  password: string
}

export interface IInnerSignupRequestPayload {
  login: string
  name: string
  password: string
}

export interface ISignupSuccessPayload {
  id: number
}

export interface ISignupFailurePayload {
  error: string
}

export type TSignupRequest = {
  type: typeof SIGNUP_REQUEST
  payload: ISignupRequestPayload
}

export type TSignupSuccess = {
  type: typeof SIGNUP_SUCCESS
  payload: ISignupSuccessPayload
}

export type TSignupFailure = {
  type: typeof SIGNUP_FAILURE
  payload: ISignupFailurePayload
}

export type TSignupActions = TSignupRequest | TSignupSuccess | TSignupFailure
