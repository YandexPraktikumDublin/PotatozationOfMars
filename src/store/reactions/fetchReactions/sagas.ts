import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchReactionsFailure, fetchReactionsSuccess } from './actions'
import { FETCH_REACTIONS_REQUEST } from './actionTypes'
import { IFetchReactionsRequestPayload } from './types'

const getReactions = (data: IFetchReactionsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).get(`/comment-reactions/${data.commentId}`)

function* fetchReactionsSaga(data: Record<string, any>) {
  try {
    const response = yield call(getReactions, data.payload)

    yield put(fetchReactionsSuccess({ reactions: response.data }))
  } catch (error) {
    yield put(
      fetchReactionsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_REACTIONS_REQUEST, fetchReactionsSaga)])
}

export default saga
