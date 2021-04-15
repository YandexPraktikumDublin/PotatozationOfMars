import {
  SIGNIN_ENJOYER_REQUEST,
  SIGNIN_ENJOYER_SUCCESS,
  SIGNIN_ENJOYER_FAILURE
} from './actionTypes'
import {
  TSigninEnjoyerRequest,
  ISigninEnjoyerRequestPayload,
  TSigninEnjoyerSuccess,
  ISigninEnjoyerSuccessPayload,
  TSigninEnjoyerFailure,
  ISigninEnjoyerFailurePayload
} from './types'

export const signinEnjoyerRequest = (
  payload: ISigninEnjoyerRequestPayload
): TSigninEnjoyerRequest => ({
  type: SIGNIN_ENJOYER_REQUEST,
  payload
})

export const signinEnjoyerSuccess = (
  payload: ISigninEnjoyerSuccessPayload
): TSigninEnjoyerSuccess => ({
  type: SIGNIN_ENJOYER_SUCCESS,
  payload
})

export const signinEnjoyerFailure = (
  payload: ISigninEnjoyerFailurePayload
): TSigninEnjoyerFailure => ({
  type: SIGNIN_ENJOYER_FAILURE,
  payload
})
