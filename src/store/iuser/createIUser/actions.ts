import {
  CREATE_IUSER_REQUEST,
  CREATE_IUSER_SUCCESS,
  CREATE_IUSER_FAILURE
} from './actionTypes'
import {
  TCreateIUserRequest,
  ICreateIUserRequestPayload,
  TCreateIUserSuccess,
  ICreateIUserSuccessPayload,
  TCreateIUserFailure,
  ICreateIUserFailurePayload
} from './types'

export const createIUserRequest = (
  payload: ICreateIUserRequestPayload
): TCreateIUserRequest => ({
  type: CREATE_IUSER_REQUEST,
  payload
})

export const createIUserSuccess = (
  payload: ICreateIUserSuccessPayload
): TCreateIUserSuccess => ({
  type: CREATE_IUSER_SUCCESS,
  payload
})

export const createIUserFailure = (
  payload: ICreateIUserFailurePayload
): TCreateIUserFailure => ({
  type: CREATE_IUSER_FAILURE,
  payload
})
