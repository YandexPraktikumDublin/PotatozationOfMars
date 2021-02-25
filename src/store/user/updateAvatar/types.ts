import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE
} from './actionTypes'

export interface IUpdateAvatarRequestPayload {
  formData: FormData
}

export interface IUpdateAvatarSuccessPayload {
  payload: string
}

export interface IUpdateAvatarFailurePayload {
  error: string
}

export type TUpdateAvatarRequest = {
  type: typeof UPDATE_AVATAR_REQUEST
  payload: IUpdateAvatarRequestPayload
}

export type TUpdateAvatarSuccess = {
  type: typeof UPDATE_AVATAR_SUCCESS
  payload: IUpdateAvatarSuccessPayload
}

export type TUpdateAvatarFailure = {
  type: typeof UPDATE_AVATAR_FAILURE
  payload: IUpdateAvatarFailurePayload
}

export type TUpdateAvatarActions =
  | TUpdateAvatarRequest
  | TUpdateAvatarSuccess
  | TUpdateAvatarFailure
