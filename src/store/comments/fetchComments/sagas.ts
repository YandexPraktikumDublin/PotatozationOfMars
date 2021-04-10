import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchCommentsFailure, fetchCommentsSuccess } from './actions'
import { FETCH_COMMENTS_REQUEST } from './actionTypes'
import { IFetchCommentsRequestPayload } from './types'

const getComments = (data: IFetchCommentsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).get(`topic-comments/${data.topicId}`)

function* fetchCommentsSaga(data: Record<string, any>) {
  try {
    const response = yield call(getComments, data.payload)

    yield put(fetchCommentsSuccess({ comments: response.data }))
  } catch (error) {
    yield put(
      fetchCommentsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga)])
}

export default saga
