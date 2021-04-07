import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchTopicFailure, fetchTopicSuccess } from './actions'
import { FETCH_TOPIC_REQUEST } from './actionTypes'

const getTopic = (id: string) =>
  getAxiosInstance(INNER_API_V1_URL).get(`/topics/${id}`)

function* fetchTopicSaga(data: any) {
  try {
    const response = yield call(getTopic, data.payload)

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
  yield all([takeLatest(FETCH_TOPIC_REQUEST, fetchTopicSaga)])
}

export default saga
