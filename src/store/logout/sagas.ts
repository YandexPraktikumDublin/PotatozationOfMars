import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { PATHS } from '@config'
import { redirectTo } from '@utils/misc'
import { logoutFailure, logoutSuccess } from './actions'
import { LOGOUT_REQUEST } from './actionTypes'

const logout = () => getAxiosInstance().post('auth/logout')

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
