import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import {
  updateIUserPasswordSuccess,
  updateIUserPasswordFailure
} from './actions'
import { UPDATE_IUSER_PASSWORD_REQUEST } from './actionTypes'
import { IUpdateIUserPasswordRequestPayload } from './types'
import { INNER_API_V1_URL } from '@config'

const updateIUserPassword = (data: IUpdateIUserPasswordRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).put('user/password', data)

function* updateIUserPasswordSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateIUserPassword, data.payload)

    yield put(updateIUserPasswordSuccess({ iuser: response.data }))
  } catch (error) {
    yield put(
      updateIUserPasswordFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([
    takeLatest(UPDATE_IUSER_PASSWORD_REQUEST, updateIUserPasswordSaga)
  ])
}

export default saga
