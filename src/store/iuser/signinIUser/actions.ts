import {
  SIGNIN_IUSER_REQUEST,
  SIGNIN_IUSER_SUCCESS,
  SIGNIN_IUSER_FAILURE
} from './actionTypes'
import {
  TSigninIUserRequest,
  ISigninIUserRequestPayload,
  TSigninIUserSuccess,
  ISigninIUserSuccessPayload,
  TSigninIUserFailure,
  ISigninIUserFailurePayload
} from './types'

export const signinIUserRequest = (
  payload: ISigninIUserRequestPayload
): TSigninIUserRequest => ({
  type: SIGNIN_IUSER_REQUEST,
  payload
})

export const signinIUserSuccess = (
  payload: ISigninIUserSuccessPayload
): TSigninIUserSuccess => ({
  type: SIGNIN_IUSER_SUCCESS,
  payload
})

export const signinIUserFailure = (
  payload: ISigninIUserFailurePayload
): TSigninIUserFailure => ({
  type: SIGNIN_IUSER_FAILURE,
  payload
})
