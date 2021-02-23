import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS } from './actionTypes'
import {
  IAuthRequestPayload,
  IAuthSuccessPayload,
  IAuthFailurePayload,
  TAuthRequest,
  TAuthSuccess,
  TAuthFailure
} from './types'

export const authRequest = (payload: IAuthRequestPayload): TAuthRequest => ({
  type: AUTH_REQUEST,
  payload
})

export const authSuccess = (payload: IAuthSuccessPayload): TAuthSuccess => ({
  type: AUTH_SUCCESS,
  payload
})

export const authFailure = (payload: IAuthFailurePayload): TAuthFailure => ({
  type: AUTH_FAILURE,
  payload
})
