import {
  UPDATE_IUSER_REQUEST,
  UPDATE_IUSER_SUCCESS,
  UPDATE_IUSER_FAILURE
} from './actionTypes'
import {
  TUpdateIUserRequest,
  IUpdateIUserRequestPayload,
  TUpdateIUserSuccess,
  IUpdateIUserSuccessPayload,
  TUpdateIUserFailure,
  IUpdateIUserFailurePayload
} from './types'

export const updateIUserRequest = (
  payload: IUpdateIUserRequestPayload
): TUpdateIUserRequest => ({
  type: UPDATE_IUSER_REQUEST,
  payload
})

export const updateIUserSuccess = (
  payload: IUpdateIUserSuccessPayload
): TUpdateIUserSuccess => ({
  type: UPDATE_IUSER_SUCCESS,
  payload
})

export const updateIUserFailure = (
  payload: IUpdateIUserFailurePayload
): TUpdateIUserFailure => ({
  type: UPDATE_IUSER_FAILURE,
  payload
})
