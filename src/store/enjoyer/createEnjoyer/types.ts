import {
  CREATE_ENJOYER_REQUEST,
  CREATE_ENJOYER_SUCCESS,
  CREATE_ENJOYER_FAILURE
} from './actionTypes'
import { IEnjoyer } from '@models'

export interface ICreateEnjoyerRequestPayload {
  login: string
  name: string
  password: string
}

export interface ICreateEnjoyerSuccessPayload {
  enjoyer: IEnjoyer
}

export interface ICreateEnjoyerFailurePayload {
  error: string
}

export type TCreateEnjoyerRequest = {
  type: typeof CREATE_ENJOYER_REQUEST
  payload: ICreateEnjoyerRequestPayload
}

export type TCreateEnjoyerSuccess = {
  type: typeof CREATE_ENJOYER_SUCCESS
  payload: ICreateEnjoyerSuccessPayload
}

export type TCreateEnjoyerFailure = {
  type: typeof CREATE_ENJOYER_FAILURE
  payload: ICreateEnjoyerFailurePayload
}

export type TCreateEnjoyerActions =
  | TCreateEnjoyerRequest
  | TCreateEnjoyerSuccess
  | TCreateEnjoyerFailure
