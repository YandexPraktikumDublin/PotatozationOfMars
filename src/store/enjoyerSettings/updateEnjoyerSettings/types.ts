import {
  UPDATE_ENJOYER_SETTINGS_REQUEST,
  UPDATE_ENJOYER_SETTINGS_SUCCESS,
  UPDATE_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import { IEnjoyerSettings } from '@models'

export interface IUpdateEnjoyerSettingsRequestPayload
  extends Omit<
    IEnjoyerSettings,
    'id' | 'enjoyerId' | 'enjoyer' | 'createdAt' | 'updatedAt'
  > {}

export interface IUpdateEnjoyerSettingsSuccessPayload {
  enjoyerSettings: IEnjoyerSettings
}

export interface IUpdateEnjoyerSettingsFailurePayload {
  error: string
}

export type TUpdateEnjoyerSettingsRequest = {
  type: typeof UPDATE_ENJOYER_SETTINGS_REQUEST
  payload: IUpdateEnjoyerSettingsRequestPayload
}

export type TUpdateEnjoyerSettingsSuccess = {
  type: typeof UPDATE_ENJOYER_SETTINGS_SUCCESS
  payload: IUpdateEnjoyerSettingsSuccessPayload
}

export type TUpdateEnjoyerSettingsFailure = {
  type: typeof UPDATE_ENJOYER_SETTINGS_FAILURE
  payload: IUpdateEnjoyerSettingsFailurePayload
}

export type TUpdateEnjoyerSettingsActions =
  | TUpdateEnjoyerSettingsRequest
  | TUpdateEnjoyerSettingsSuccess
  | TUpdateEnjoyerSettingsFailure
