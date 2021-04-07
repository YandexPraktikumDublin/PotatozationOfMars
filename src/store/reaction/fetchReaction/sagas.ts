import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchReactionFailure, fetchReactionSuccess } from './actions'
import { FETCH_REACTION_REQUEST } from './actionTypes'
import { IFetchReactionRequestPayload } from '@store/reaction/fetchReaction/types'

const getReaction = (data: IFetchReactionRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).get(`/reactions/${data.id}`)

function* fetchReactionSaga(data: Record<string, any>) {
  try {
    const response = yield call(getReaction, data.payload)

    yield put(fetchReactionSuccess({ reaction: response.data }))
  } catch (error) {
    yield put(
      fetchReactionFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_REACTION_REQUEST, fetchReactionSaga)])
}

export default saga
