import {
  CREATE_ENJOYER_SETTINGS_REQUEST,
  CREATE_ENJOYER_SETTINGS_SUCCESS,
  CREATE_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import { IEnjoyerSettings } from '@models'

export interface ICreateEnjoyerSettingsRequestPayload
  extends Omit<
    IEnjoyerSettings,
    'id' | 'enjoyerId' | 'enjoyer' | 'createdAt' | 'updatedAt'
  > {}

export interface ICreateEnjoyerSettingsSuccessPayload {
  enjoyerSettings: IEnjoyerSettings
}

export interface ICreateEnjoyerSettingsFailurePayload {
  error: string
}

export type TCreateEnjoyerSettingsRequest = {
  type: typeof CREATE_ENJOYER_SETTINGS_REQUEST
  payload: ICreateEnjoyerSettingsRequestPayload
}

export type TCreateEnjoyerSettingsSuccess = {
  type: typeof CREATE_ENJOYER_SETTINGS_SUCCESS
  payload: ICreateEnjoyerSettingsSuccessPayload
}

export type TCreateEnjoyerSettingsFailure = {
  type: typeof CREATE_ENJOYER_SETTINGS_FAILURE
  payload: ICreateEnjoyerSettingsFailurePayload
}

export type TCreateEnjoyerSettingsActions =
  | TCreateEnjoyerSettingsRequest
  | TCreateEnjoyerSettingsSuccess
  | TCreateEnjoyerSettingsFailure
