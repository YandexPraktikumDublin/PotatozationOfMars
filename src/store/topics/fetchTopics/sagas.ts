import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchTopicsFailure, fetchTopicsSuccess } from './actions'
import { FETCH_TOPICS_REQUEST } from './actionTypes'

const getTopics = () => getAxiosInstance(INNER_API_V1_URL).get('topics')

function* fetchTopicsSaga() {
  try {
    const response = yield call(getTopics)

    yield put(fetchTopicsSuccess({ topics: response.data }))
  } catch (error) {
    yield put(
      fetchTopicsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_TOPICS_REQUEST, fetchTopicsSaga)])
}

export default saga
