import {
  CREATE_ENJOYER_SETTINGS_REQUEST,
  CREATE_ENJOYER_SETTINGS_SUCCESS,
  CREATE_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import {
  ICreateEnjoyerSettingsRequestPayload,
  ICreateEnjoyerSettingsSuccessPayload,
  ICreateEnjoyerSettingsFailurePayload,
  TCreateEnjoyerSettingsRequest,
  TCreateEnjoyerSettingsSuccess,
  TCreateEnjoyerSettingsFailure
} from './types'

export const createEnjoyerSettingsRequest = (
  payload: ICreateEnjoyerSettingsRequestPayload
): TCreateEnjoyerSettingsRequest => ({
  type: CREATE_ENJOYER_SETTINGS_REQUEST,
  payload
})

export const createEnjoyerSettingsSuccess = (
  payload: ICreateEnjoyerSettingsSuccessPayload
): TCreateEnjoyerSettingsSuccess => ({
  type: CREATE_ENJOYER_SETTINGS_SUCCESS,
  payload
})

export const createEnjoyerSettingsFailure = (
  payload: ICreateEnjoyerSettingsFailurePayload
): TCreateEnjoyerSettingsFailure => ({
  type: CREATE_ENJOYER_SETTINGS_FAILURE,
  payload
})
