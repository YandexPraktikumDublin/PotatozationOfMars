import {
  SIGNIN_ENJOYER_REQUEST,
  SIGNIN_ENJOYER_SUCCESS,
  SIGNIN_ENJOYER_FAILURE
} from './actionTypes'
import { IEnjoyer } from '@models'

export interface ISigninEnjoyerRequestPayload {
  login: string
  password: string
}

export interface ISigninEnjoyerSuccessPayload {
  enjoyer: IEnjoyer
}

export interface ISigninEnjoyerFailurePayload {
  error: string
}

export type TSigninEnjoyerRequest = {
  type: typeof SIGNIN_ENJOYER_REQUEST
  payload: ISigninEnjoyerRequestPayload
}

export type TSigninEnjoyerSuccess = {
  type: typeof SIGNIN_ENJOYER_SUCCESS
  payload: ISigninEnjoyerSuccessPayload
}

export type TSigninEnjoyerFailure = {
  type: typeof SIGNIN_ENJOYER_FAILURE
  payload: ISigninEnjoyerFailurePayload
}

export type TSigninEnjoyerActions =
  | TSigninEnjoyerRequest
  | TSigninEnjoyerSuccess
  | TSigninEnjoyerFailure
