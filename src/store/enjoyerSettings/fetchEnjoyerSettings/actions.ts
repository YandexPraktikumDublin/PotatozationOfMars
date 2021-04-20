import {
  FETCH_ENJOYER_SETTINGS_REQUEST,
  FETCH_ENJOYER_SETTINGS_SUCCESS,
  FETCH_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import {
  IFetchEnjoyerSettingsSuccessPayload,
  IFetchEnjoyerSettingsFailurePayload,
  TFetchEnjoyerSettingsRequest,
  TFetchEnjoyerSettingsSuccess,
  TFetchEnjoyerSettingsFailure
} from './types'

export const fetchEnjoyerSettingsRequest = (): TFetchEnjoyerSettingsRequest => ({
  type: FETCH_ENJOYER_SETTINGS_REQUEST
})

export const fetchEnjoyerSettingsSuccess = (
  payload: IFetchEnjoyerSettingsSuccessPayload
): TFetchEnjoyerSettingsSuccess => ({
  type: FETCH_ENJOYER_SETTINGS_SUCCESS,
  payload
})

export const fetchEnjoyerSettingsFailure = (
  payload: IFetchEnjoyerSettingsFailurePayload
): TFetchEnjoyerSettingsFailure => ({
  type: FETCH_ENJOYER_SETTINGS_FAILURE,
  payload
})
