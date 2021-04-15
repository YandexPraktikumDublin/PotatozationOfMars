import {
  UPDATE_ENJOYER_REQUEST,
  UPDATE_ENJOYER_SUCCESS,
  UPDATE_ENJOYER_FAILURE
} from './actionTypes'
import { IEnjoyer } from '@models'

export interface IUpdateEnjoyerRequestPayload {
  login?: string
  name?: string
}

export interface IUpdateEnjoyerSuccessPayload {
  enjoyer: IEnjoyer
}

export interface IUpdateEnjoyerFailurePayload {
  error: string
}

export type TUpdateEnjoyerRequest = {
  type: typeof UPDATE_ENJOYER_REQUEST
  payload: IUpdateEnjoyerRequestPayload
}

export type TUpdateEnjoyerSuccess = {
  type: typeof UPDATE_ENJOYER_SUCCESS
  payload: IUpdateEnjoyerSuccessPayload
}

export type TUpdateEnjoyerFailure = {
  type: typeof UPDATE_ENJOYER_FAILURE
  payload: IUpdateEnjoyerFailurePayload
}

export type TUpdateEnjoyerActions =
  | TUpdateEnjoyerRequest
  | TUpdateEnjoyerSuccess
  | TUpdateEnjoyerFailure
