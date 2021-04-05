import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { updateLeaderboardSuccess, updateLeaderboardFailure } from './actions'
import { UPDATE_LEADERBOARD_REQUEST } from './actionTypes'
import { IUpdateLeaderboardRequestPayload } from './types'
import { RATING_FIELD_NAME } from '@config'

const updateLeaderboard = (data: IUpdateLeaderboardRequestPayload) =>
  getAxiosInstance().post('leaderboard', data)

function* updateLeaderboardSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateLeaderboard, {
      ratingFieldName: RATING_FIELD_NAME,
      ...data.payload
    })

    yield put(updateLeaderboardSuccess({ user: response.data }))
  } catch (error) {
    yield put(
      updateLeaderboardFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_LEADERBOARD_REQUEST, updateLeaderboardSaga)])
}

export default saga
