import {
  FETCH_USER_SETTINGS_REQUEST,
  FETCH_USER_SETTINGS_SUCCESS,
  FETCH_USER_SETTINGS_FAILURE
} from './actionTypes'
import { IUserSettings } from '@models'

export interface IFetchUserSettingsSuccessPayload {
  userSettings: IUserSettings
}

export interface IFetchUserSettingsFailurePayload {
  error: string
}

export type TFetchUserSettingsRequest = {
  type: typeof FETCH_USER_SETTINGS_REQUEST
}

export type TFetchUserSettingsSuccess = {
  type: typeof FETCH_USER_SETTINGS_SUCCESS
  payload: IFetchUserSettingsSuccessPayload
}

export type TFetchUserSettingsFailure = {
  type: typeof FETCH_USER_SETTINGS_FAILURE
  payload: IFetchUserSettingsFailurePayload
}

export type TFetchUserSettingsActions =
  | TFetchUserSettingsRequest
  | TFetchUserSettingsSuccess
  | TFetchUserSettingsFailure
