import { all, call, put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '@api'
import history from '@history'
import { PATHS } from '@config'
import { logoutFailure, logoutSuccess } from './actions'
import { LOGOUT_REQUEST } from './actionTypes'

const logout = () => axiosInstance.post('auth/logout')

const redirectTo = (location: string) => history.push(location)

function* logoutSaga() {
  try {
    const response = yield call(logout)

    yield put(logoutSuccess(response.data))
    yield call(redirectTo, PATHS.AUTH)
  } catch (error) {
    yield put(
      logoutFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(LOGOUT_REQUEST, logoutSaga)])
}

export default saga
