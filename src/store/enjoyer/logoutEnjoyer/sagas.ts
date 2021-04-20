import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { logoutEnjoyerFailure, logoutEnjoyerSuccess } from './actions'
import { LOGOUT_ENJOYER_REQUEST } from './actionTypes'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const getEnjoyer = () =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post('logout')

function* logoutEnjoyerSaga() {
  try {
    yield call(getEnjoyer)
    yield put(logoutEnjoyerSuccess())
  } catch (error) {
    yield put(
      logoutEnjoyerFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(LOGOUT_ENJOYER_REQUEST, logoutEnjoyerSaga)])
}

export default saga
