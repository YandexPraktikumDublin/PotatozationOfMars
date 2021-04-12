import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import { deleteReactionFailure, deleteReactionSuccess } from './actions'
import { DELETE_REACTION_REQUEST } from './actionTypes'
import { IDeleteReactionRequestPayload } from '@store/reaction/deleteReaction/types'
import { removeReaction } from '@store/comments/actions'

const deleteReaction = (data: IDeleteReactionRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).delete(
    `reactions/${data.reaction.id}`
  )

function* deleteReactionSaga(data: Record<string, any>) {
  try {
    yield call(deleteReaction, data.payload)

    yield put(deleteReactionSuccess())
    yield put(removeReaction({ reaction: data.payload.reaction }))
  } catch (error) {
    yield put(
      deleteReactionFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(DELETE_REACTION_REQUEST, deleteReactionSaga)])
}

export default saga
