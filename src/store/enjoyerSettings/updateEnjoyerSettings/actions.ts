import {
  UPDATE_ENJOYER_SETTINGS_REQUEST,
  UPDATE_ENJOYER_SETTINGS_SUCCESS,
  UPDATE_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import {
  IUpdateEnjoyerSettingsRequestPayload,
  IUpdateEnjoyerSettingsSuccessPayload,
  IUpdateEnjoyerSettingsFailurePayload,
  TUpdateEnjoyerSettingsRequest,
  TUpdateEnjoyerSettingsSuccess,
  TUpdateEnjoyerSettingsFailure
} from './types'

export const updateEnjoyerSettingsRequest = (
  payload: IUpdateEnjoyerSettingsRequestPayload
): TUpdateEnjoyerSettingsRequest => ({
  type: UPDATE_ENJOYER_SETTINGS_REQUEST,
  payload
})

export const updateEnjoyerSettingsSuccess = (
  payload: IUpdateEnjoyerSettingsSuccessPayload
): TUpdateEnjoyerSettingsSuccess => ({
  type: UPDATE_ENJOYER_SETTINGS_SUCCESS,
  payload
})

export const updateEnjoyerSettingsFailure = (
  payload: IUpdateEnjoyerSettingsFailurePayload
): TUpdateEnjoyerSettingsFailure => ({
  type: UPDATE_ENJOYER_SETTINGS_FAILURE,
  payload
})
