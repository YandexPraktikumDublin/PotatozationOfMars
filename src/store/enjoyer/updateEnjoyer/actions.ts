import {
  UPDATE_ENJOYER_REQUEST,
  UPDATE_ENJOYER_SUCCESS,
  UPDATE_ENJOYER_FAILURE
} from './actionTypes'
import {
  TUpdateEnjoyerRequest,
  IUpdateEnjoyerRequestPayload,
  TUpdateEnjoyerSuccess,
  IUpdateEnjoyerSuccessPayload,
  TUpdateEnjoyerFailure,
  IUpdateEnjoyerFailurePayload
} from './types'

export const updateEnjoyerRequest = (
  payload: IUpdateEnjoyerRequestPayload
): TUpdateEnjoyerRequest => ({
  type: UPDATE_ENJOYER_REQUEST,
  payload
})

export const updateEnjoyerSuccess = (
  payload: IUpdateEnjoyerSuccessPayload
): TUpdateEnjoyerSuccess => ({
  type: UPDATE_ENJOYER_SUCCESS,
  payload
})

export const updateEnjoyerFailure = (
  payload: IUpdateEnjoyerFailurePayload
): TUpdateEnjoyerFailure => ({
  type: UPDATE_ENJOYER_FAILURE,
  payload
})
