import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { fetchIUserFailure, fetchIUserSuccess } from './actions'
import { FETCH_IUSER_REQUEST } from './actionTypes'
import { INNER_API_V1_URL } from '@config'

const getIUser = () => getAxiosInstance(INNER_API_V1_URL).get('user')

function* fetchIUserSaga() {
  try {
    const response = yield call(getIUser)

    yield put(fetchIUserSuccess({ iuser: response.data }))
  } catch (error) {
    yield put(
      fetchIUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_IUSER_REQUEST, fetchIUserSaga)])
}

export default saga
