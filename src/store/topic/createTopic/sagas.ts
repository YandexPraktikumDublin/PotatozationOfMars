import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { createTopicFailure, createTopicSuccess } from './actions'
import { CREATE_TOPIC_REQUEST } from './actionTypes'
import { ICreateTopicRequestPayload } from '@store/topic/createTopic/types'

const createTopic = (data: ICreateTopicRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).post('/topics', data)

function* createTopicSaga(data: Record<string, any>) {
  try {
    const response = yield call(createTopic, data.payload)

    yield put(createTopicSuccess({ topic: response.data }))
  } catch (error) {
    yield put(
      createTopicFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_TOPIC_REQUEST, createTopicSaga)])
}

export default saga
