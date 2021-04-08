import {
  UPDATE_USER_SETTINGS_REQUEST,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_FAILURE
} from './actionTypes'
import {
  IUpdateUserSettingsRequestPayload,
  IUpdateUserSettingsSuccessPayload,
  IUpdateUserSettingsFailurePayload,
  TUpdateUserSettingsRequest,
  TUpdateUserSettingsSuccess,
  TUpdateUserSettingsFailure
} from './types'

export const updateUserSettingsRequest = (
  payload: IUpdateUserSettingsRequestPayload
): TUpdateUserSettingsRequest => ({
  type: UPDATE_USER_SETTINGS_REQUEST,
  payload
})

export const updateUserSettingsSuccess = (
  payload: IUpdateUserSettingsSuccessPayload
): TUpdateUserSettingsSuccess => ({
  type: UPDATE_USER_SETTINGS_SUCCESS,
  payload
})

export const updateUserSettingsFailure = (
  payload: IUpdateUserSettingsFailurePayload
): TUpdateUserSettingsFailure => ({
  type: UPDATE_USER_SETTINGS_FAILURE,
  payload
})
