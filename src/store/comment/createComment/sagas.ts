import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { createCommentFailure, createCommentSuccess } from './actions'
import { CREATE_COMMENT_REQUEST } from './actionTypes'
import { ICreateCommentRequestPayload } from '@store/comment/createComment/types'
import { addComment } from '@store/comments/actions'

const createComment = (data: ICreateCommentRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).post('/comments', data)

function* createCommentSaga(data: Record<string, any>) {
  try {
    const response = yield call(createComment, data.payload)

    yield put(createCommentSuccess({ comment: response.data }))
    yield put(addComment({ comment: response.data }))
  } catch (error) {
    yield put(
      createCommentFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_COMMENT_REQUEST, createCommentSaga)])
}

export default saga
