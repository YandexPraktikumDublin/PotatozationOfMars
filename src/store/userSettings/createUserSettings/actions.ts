import {
  CREATE_USER_SETTINGS_REQUEST,
  CREATE_USER_SETTINGS_SUCCESS,
  CREATE_USER_SETTINGS_FAILURE
} from './actionTypes'
import {
  ICreateUserSettingsRequestPayload,
  ICreateUserSettingsSuccessPayload,
  ICreateUserSettingsFailurePayload,
  TCreateUserSettingsRequest,
  TCreateUserSettingsSuccess,
  TCreateUserSettingsFailure
} from './types'

export const createUserSettingsRequest = (
  payload: ICreateUserSettingsRequestPayload
): TCreateUserSettingsRequest => ({
  type: CREATE_USER_SETTINGS_REQUEST,
  payload
})

export const createUserSettingsSuccess = (
  payload: ICreateUserSettingsSuccessPayload
): TCreateUserSettingsSuccess => ({
  type: CREATE_USER_SETTINGS_SUCCESS,
  payload
})

export const createUserSettingsFailure = (
  payload: ICreateUserSettingsFailurePayload
): TCreateUserSettingsFailure => ({
  type: CREATE_USER_SETTINGS_FAILURE,
  payload
})
