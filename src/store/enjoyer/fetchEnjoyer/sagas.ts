import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { fetchEnjoyerFailure, fetchEnjoyerSuccess } from './actions'
import { FETCH_ENJOYER_REQUEST } from './actionTypes'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const getEnjoyer = () =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).get('enjoyer')

function* fetchEnjoyerSaga() {
  try {
    const response = yield call(getEnjoyer)

    yield put(fetchEnjoyerSuccess({ enjoyer: response.data }))
  } catch (error) {
    yield put(
      fetchEnjoyerFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_ENJOYER_REQUEST, fetchEnjoyerSaga)])
}

export default saga
