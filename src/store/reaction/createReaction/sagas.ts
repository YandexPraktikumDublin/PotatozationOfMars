import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import { createReactionFailure, createReactionSuccess } from './actions'
import { CREATE_REACTION_REQUEST } from './actionTypes'
import { ICreateReactionRequestPayload } from './types'
import { addReaction } from '@store/comments/actions'

const createReaction = (data: ICreateReactionRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'reactions',
    data
  )

function* createReactionSaga(data: Record<string, any>) {
  try {
    const response = yield call(createReaction, data.payload)

    yield put(createReactionSuccess({ reaction: response.data }))
    yield put(addReaction({ reaction: response.data }))
  } catch (error) {
    yield put(
      createReactionFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_REACTION_REQUEST, createReactionSaga)])
}

export default saga
