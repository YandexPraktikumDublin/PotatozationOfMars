import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchTopicFailure, fetchTopicSuccess } from './actions'
import { FETCH_TOPIC_REQUEST } from './actionTypes'
import { IFetchTopicRequestPayload } from '@store/topic/fetchTopic/types'

const getTopic = (data: IFetchTopicRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).get(`topics/${data.id}`)

function* fetchTopicSaga(data: Record<string, any>) {
  try {
    const response = yield call(getTopic, data.payload)

    yield put(fetchTopicSuccess({ topic: response.data }))
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
