import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './actionTypes'
import {
  TUpdateUserRequest,
  IUpdateUserRequestPayload,
  TUpdateUserSuccess,
  IUpdateUserSuccessPayload,
  TUpdateUserFailure,
  IUpdateUserFailurePayload
} from './types'

export const updateUserRequest = (
  payload: IUpdateUserRequestPayload
): TUpdateUserRequest => ({
  type: UPDATE_USER_REQUEST,
  payload
})

export const updateUserSuccess = (
  payload: IUpdateUserSuccessPayload
): TUpdateUserSuccess => ({
  type: UPDATE_USER_SUCCESS,
  payload
})

export const updateUserFailure = (
  payload: IUpdateUserFailurePayload
): TUpdateUserFailure => ({
  type: UPDATE_USER_FAILURE,
  payload
})
