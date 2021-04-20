import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import { createFeedbackFailure, createFeedbackSuccess } from './actions'
import { CREATE_FEEDBACK_REQUEST } from './actionTypes'
import { ICreateFeedbackRequestPayload } from './types'

const createFeedback = (data: ICreateFeedbackRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'feedbacks',
    data
  )

function* createFeedbackSaga(data: Record<string, any>) {
  try {
    const response = yield call(createFeedback, data.payload)

    yield put(createFeedbackSuccess({ feedback: response.data }))
  } catch (error) {
    yield put(
      createFeedbackFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_FEEDBACK_REQUEST, createFeedbackSaga)])
}

export default saga
