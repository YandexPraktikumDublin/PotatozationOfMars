import {
  FETCH_USER_SETTINGS_REQUEST,
  FETCH_USER_SETTINGS_SUCCESS,
  FETCH_USER_SETTINGS_FAILURE
} from './actionTypes'
import {
  IFetchUserSettingsSuccessPayload,
  IFetchUserSettingsFailurePayload,
  TFetchUserSettingsRequest,
  TFetchUserSettingsSuccess,
  TFetchUserSettingsFailure
} from './types'

export const fetchUserSettingsRequest = (): TFetchUserSettingsRequest => ({
  type: FETCH_USER_SETTINGS_REQUEST
})

export const fetchUserSettingsSuccess = (
  payload: IFetchUserSettingsSuccessPayload
): TFetchUserSettingsSuccess => ({
  type: FETCH_USER_SETTINGS_SUCCESS,
  payload
})

export const fetchUserSettingsFailure = (
  payload: IFetchUserSettingsFailurePayload
): TFetchUserSettingsFailure => ({
  type: FETCH_USER_SETTINGS_FAILURE,
  payload
})
