import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { fetchUserFailure, fetchUserSuccess } from './actions'
import { FETCH_USER_REQUEST } from './actionTypes'

const getUser = () => getAxiosInstance().get('auth/user')

function* fetchUserSaga() {
  try {
    const response = yield call(getUser)

    yield put(fetchUserSuccess({ user: response.data }))
  } catch (error) {
    yield put(
      fetchUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)])
}

export default saga
