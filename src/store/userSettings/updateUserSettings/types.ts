import {
  UPDATE_USER_SETTINGS_REQUEST,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_FAILURE
} from './actionTypes'
import { IUserSettings } from '@models'

export interface IUpdateUserSettingsRequestPayload
  extends Omit<
    IUserSettings,
    'id' | 'userId' | 'user' | 'createdAt' | 'updatedAt'
  > {}

export interface IUpdateUserSettingsSuccessPayload {
  userSettings: IUserSettings
}

export interface IUpdateUserSettingsFailurePayload {
  error: string
}

export type TUpdateUserSettingsRequest = {
  type: typeof UPDATE_USER_SETTINGS_REQUEST
  payload: IUpdateUserSettingsRequestPayload
}

export type TUpdateUserSettingsSuccess = {
  type: typeof UPDATE_USER_SETTINGS_SUCCESS
  payload: IUpdateUserSettingsSuccessPayload
}

export type TUpdateUserSettingsFailure = {
  type: typeof UPDATE_USER_SETTINGS_FAILURE
  payload: IUpdateUserSettingsFailurePayload
}

export type TUpdateUserSettingsActions =
  | TUpdateUserSettingsRequest
  | TUpdateUserSettingsSuccess
  | TUpdateUserSettingsFailure
