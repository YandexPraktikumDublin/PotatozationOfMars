import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { updatePasswordSuccess, updatePasswordFailure } from './actions'
import { UPDATE_PASSWORD_REQUEST } from './actionTypes'
import { IUpdatePasswordRequestPayload } from './types'
import { INNER_API_V1_URL } from '@config'

const updatePassword = (data: IUpdatePasswordRequestPayload) =>
  getAxiosInstance().put('user/password', data)

const innerUpdatePassword = (data: IUpdatePasswordRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).put('user/password', data)

function* updatePasswordSaga(data: Record<string, any>) {
  try {
    const response = yield call(updatePassword, data.payload)

    yield put(updatePasswordSuccess({ user: response.data }))
    yield call(innerUpdatePassword, data.payload)
  } catch (error) {
    yield put(
      updatePasswordFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_PASSWORD_REQUEST, updatePasswordSaga)])
}

export default saga
