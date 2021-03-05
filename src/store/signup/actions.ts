import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actionTypes'
import {
  ISignupRequestPayload,
  ISignupSuccessPayload,
  ISignupFailurePayload,
  TSignupRequest,
  TSignupSuccess,
  TSignupFailure
} from './types'

export const signupRequest = (
  payload: ISignupRequestPayload
): TSignupRequest => ({
  type: SIGNUP_REQUEST,
  payload
})

export const signupSuccess = (
  payload: ISignupSuccessPayload
): TSignupSuccess => ({
  type: SIGNUP_SUCCESS,
  payload
})

export const signupFailure = (
  payload: ISignupFailurePayload
): TSignupFailure => ({
  type: SIGNUP_FAILURE,
  payload
})
