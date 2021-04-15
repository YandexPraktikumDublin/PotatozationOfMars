import {
  UPDATE_ENJOYER_PASSWORD_REQUEST,
  UPDATE_ENJOYER_PASSWORD_SUCCESS,
  UPDATE_ENJOYER_PASSWORD_FAILURE
} from './actionTypes'
import {
  TUpdateEnjoyerPasswordRequest,
  IUpdateEnjoyerPasswordRequestPayload,
  TUpdateEnjoyerPasswordSuccess,
  IUpdateEnjoyerPasswordSuccessPayload,
  TUpdateEnjoyerPasswordFailure,
  IUpdateEnjoyerPasswordFailurePayload
} from './types'

export const updateEnjoyerPasswordRequest = (
  payload: IUpdateEnjoyerPasswordRequestPayload
): TUpdateEnjoyerPasswordRequest => ({
  type: UPDATE_ENJOYER_PASSWORD_REQUEST,
  payload
})

export const updateEnjoyerPasswordSuccess = (
  payload: IUpdateEnjoyerPasswordSuccessPayload
): TUpdateEnjoyerPasswordSuccess => ({
  type: UPDATE_ENJOYER_PASSWORD_SUCCESS,
  payload
})

export const updateEnjoyerPasswordFailure = (
  payload: IUpdateEnjoyerPasswordFailurePayload
): TUpdateEnjoyerPasswordFailure => ({
  type: UPDATE_ENJOYER_PASSWORD_FAILURE,
  payload
})
