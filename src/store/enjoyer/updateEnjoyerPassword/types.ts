import {
  UPDATE_ENJOYER_PASSWORD_REQUEST,
  UPDATE_ENJOYER_PASSWORD_SUCCESS,
  UPDATE_ENJOYER_PASSWORD_FAILURE
} from './actionTypes'
import { IEnjoyer } from '@models'

export interface IUpdateEnjoyerPasswordRequestPayload {
  oldPassword: string
  newPassword: string
}

export interface IUpdateEnjoyerPasswordSuccessPayload {
  enjoyer: IEnjoyer
}

export interface IUpdateEnjoyerPasswordFailurePayload {
  error: string
}

export type TUpdateEnjoyerPasswordRequest = {
  type: typeof UPDATE_ENJOYER_PASSWORD_REQUEST
  payload: IUpdateEnjoyerPasswordRequestPayload
}

export type TUpdateEnjoyerPasswordSuccess = {
  type: typeof UPDATE_ENJOYER_PASSWORD_SUCCESS
  payload: IUpdateEnjoyerPasswordSuccessPayload
}

export type TUpdateEnjoyerPasswordFailure = {
  type: typeof UPDATE_ENJOYER_PASSWORD_FAILURE
  payload: IUpdateEnjoyerPasswordFailurePayload
}

export type TUpdateEnjoyerPasswordActions =
  | TUpdateEnjoyerPasswordRequest
  | TUpdateEnjoyerPasswordSuccess
  | TUpdateEnjoyerPasswordFailure
