import {
  CREATE_ENJOYER_REQUEST,
  CREATE_ENJOYER_SUCCESS,
  CREATE_ENJOYER_FAILURE
} from './actionTypes'
import {
  TCreateEnjoyerRequest,
  ICreateEnjoyerRequestPayload,
  TCreateEnjoyerSuccess,
  ICreateEnjoyerSuccessPayload,
  TCreateEnjoyerFailure,
  ICreateEnjoyerFailurePayload
} from './types'

export const createEnjoyerRequest = (
  payload: ICreateEnjoyerRequestPayload
): TCreateEnjoyerRequest => ({
  type: CREATE_ENJOYER_REQUEST,
  payload
})

export const createEnjoyerSuccess = (
  payload: ICreateEnjoyerSuccessPayload
): TCreateEnjoyerSuccess => ({
  type: CREATE_ENJOYER_SUCCESS,
  payload
})

export const createEnjoyerFailure = (
  payload: ICreateEnjoyerFailurePayload
): TCreateEnjoyerFailure => ({
  type: CREATE_ENJOYER_FAILURE,
  payload
})
