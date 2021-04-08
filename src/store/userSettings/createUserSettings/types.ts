import {
  CREATE_USER_SETTINGS_REQUEST,
  CREATE_USER_SETTINGS_SUCCESS,
  CREATE_USER_SETTINGS_FAILURE
} from './actionTypes'
import { IUserSettings } from '@models'

export interface ICreateUserSettingsRequestPayload
  extends Omit<
    IUserSettings,
    'id' | 'userId' | 'user' | 'createdAt' | 'updatedAt'
  > {}

export interface ICreateUserSettingsSuccessPayload {
  userSettings: IUserSettings
}

export interface ICreateUserSettingsFailurePayload {
  error: string
}

export type TCreateUserSettingsRequest = {
  type: typeof CREATE_USER_SETTINGS_REQUEST
  payload: ICreateUserSettingsRequestPayload
}

export type TCreateUserSettingsSuccess = {
  type: typeof CREATE_USER_SETTINGS_SUCCESS
  payload: ICreateUserSettingsSuccessPayload
}

export type TCreateUserSettingsFailure = {
  type: typeof CREATE_USER_SETTINGS_FAILURE
  payload: ICreateUserSettingsFailurePayload
}

export type TCreateUserSettingsActions =
  | TCreateUserSettingsRequest
  | TCreateUserSettingsSuccess
  | TCreateUserSettingsFailure
