import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { logoutIUserFailure, logoutIUserSuccess } from './actions'
import { LOGOUT_IUSER_REQUEST } from './actionTypes'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const getIUser = () =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post('logout')

function* logoutIUserSaga() {
  try {
    yield call(getIUser)
    yield put(logoutIUserSuccess())
  } catch (error) {
    yield put(
      logoutIUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(LOGOUT_IUSER_REQUEST, logoutIUserSaga)])
}

export default saga
