import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import { fetchCommentFailure, fetchCommentSuccess } from './actions'
import { FETCH_COMMENT_REQUEST } from './actionTypes'
import { IFetchCommentRequestPayload } from '@store/comment/fetchComment/types'

const getComment = (data: IFetchCommentRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).get(
    `comments/${data.id}`
  )

function* fetchCommentSaga(data: Record<string, any>) {
  try {
    const response = yield call(getComment, data.payload)

    yield put(fetchCommentSuccess({ comment: response.data }))
  } catch (error) {
    yield put(
      fetchCommentFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_COMMENT_REQUEST, fetchCommentSaga)])
}

export default saga
