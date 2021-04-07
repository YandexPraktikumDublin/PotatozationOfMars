import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchTopicFailure, fetchTopicSuccess } from './actions'
import { FETCH_TOPICS_LIST_REQUEST } from './actionTypes'

const getTopics = () => getAxiosInstance(INNER_API_V1_URL).get(`/topics`)

function* fetchTopicSaga() {
  try {
    const response = yield call(getTopics)

    yield put(fetchTopicSuccess(response.data))
  } catch (error) {
    yield put(
      fetchTopicFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_TOPICS_LIST_REQUEST, fetchTopicSaga)])
}

export default saga
