import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE
} from './actionTypes'
import {
  IUpdateAvatarRequestPayload,
  TUpdateAvatarRequest,
  TUpdateAvatarSuccess,
  IUpdateAvatarSuccessPayload,
  TUpdateAvatarFailure,
  IUpdateAvatarFailurePayload
} from './types'

export const updateAvatarRequest = (
  payload: IUpdateAvatarRequestPayload
): TUpdateAvatarRequest => ({
  type: UPDATE_AVATAR_REQUEST,
  payload
})

export const updateAvatarSuccess = (
  payload: IUpdateAvatarSuccessPayload
): TUpdateAvatarSuccess => ({
  type: UPDATE_AVATAR_SUCCESS,
  payload
})

export const updateAvatarFailure = (
  payload: IUpdateAvatarFailurePayload
): TUpdateAvatarFailure => ({
  type: UPDATE_AVATAR_FAILURE,
  payload
})
